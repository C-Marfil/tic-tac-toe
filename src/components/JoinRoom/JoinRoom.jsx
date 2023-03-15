/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const JoinRoomModal = ({ setRoomCode, socket }) => {
  const [roomCodeInput, setRoomCodeInput] = useState(null);
  const [rooms, setRooms] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const saveLobby = JSON.stringify([...rooms]);
  const lobby = JSON.parse(localStorage.getItem("lobby"))

  const handleSave = (e) => {
    e.preventDefault();
    if (roomCodeInput === null) {
      alert("Please select or create a room");
    }
    setRoomCode(roomCodeInput);
    console.log("this is roomCodeInput at handleSave", roomCodeInput);
    setRooms([...rooms]);
    const saveLobby = JSON.stringify([...rooms, roomCodeInput]);
    localStorage.setItem("lobby", saveLobby);
    console.log("this is localStorage saved", localStorage.getItem("rooms"));
    socket.emit("update-rooms", rooms);
    navigate(`/room${roomCodeInput}`); // In order to navigate how do I keep the lobby state from resetting?
    console.log("this is rooms at handleSave", rooms);
  };

  socket.on("rooms-incoming", (currentOpenRooms) => {
    setRooms(currentOpenRooms);
  });

  const handleRoomClick = (event) => {
    setRoomCode(event.target.id);
    navigate(`/room${event.target.id}`);
    console.log(event.target.id, "<----- event.target.id");
  };

  useEffect(() => {
    if (rooms.length >= 1 || lobby.length >= 1) {
      setRooms(() => lobby);
      console.log("this is lobby at location useEffect", lobby);
    }
  }, [location]);

  useEffect(() => {
    setRoomCode(roomCodeInput);

    socket.on("numberOfUsers", (users, roomCode) => {
      if (users === 2) {
        const index = rooms.indexOf(roomCode);
        const updatedRooms = rooms.splice(index, 1);

        localStorage.setItem("lobby", saveLobby);
        socket.emit("update-rooms", updatedRooms);
        console.log("users that will meet the condition if 2", users);
        console.log("this is updatedRooms if users===2", updatedRooms);
        console.log("this is rooms if user ===2", rooms);
      }
    });
  }, [setRoomCode]);

  return (
    <div>
      <form>
        <h1 className="joinRoomModal-card-title">Enter a room code</h1>
        <input
          className="joinRoomModal-card-input"
          type="number"
          value={roomCodeInput}
          placeholder="eg: 1212"
          onChange={(e) => setRoomCodeInput(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => handleSave(e)}
          className="joinRoomModal-card-button"
        >
          Save
        </button>
      </form>
      <div>
        {rooms.map((room) => {
          return (
            <button
              type="button"
              id={room}
              onClick={(e) => {
                handleRoomClick(e);
              }}
            >
              Join room {room}
            </button>
          );
        })}
      </div>
    </div>
  );
};

JoinRoomModal.propTypes = {
  setRoomCode: PropTypes.func.isRequired,
};

export default JoinRoomModal;
