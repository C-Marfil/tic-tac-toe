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
  const saveLobby = JSON.stringify([...rooms, roomCodeInput]);
  const lobby = JSON.parse(localStorage.getItem("lobby"));

  const handleSave = (e) => {
    e.preventDefault();
    if (roomCodeInput === null) {
      alert("Please select or create a room");
    }
    setRoomCode(roomCodeInput);
    console.log("this is roomCodeInput at handleSave", roomCodeInput);
    setRooms([...rooms, roomCodeInput]);
    localStorage.setItem("lobby", saveLobby);
    console.log("this is localStorage saved", localStorage.getItem("rooms"));
    socket.emit("update-rooms", rooms);
    navigate(`/room${roomCodeInput}`); 
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

  const handleRefresh = () => {
    if (lobby) {
      setRooms(() => lobby);
      console.log("this is lobby at refresh", lobby);
    }
  };

  useEffect(() => {
    if (lobby) {
      setRooms(() => lobby);
      console.log("this is lobby at location useEffect", lobby);
    }
  }, [location, roomCodeInput]);

  useEffect(() => {
    setRoomCode(roomCodeInput);

    socket.on("numberOfUsers", (users, roomCode) => {
      if (users === 2) {
        const index = rooms.indexOf(roomCode);
        setRooms(rooms.splice(index, 0));
        localStorage.setItem("lobby", saveLobby);
        socket.emit("update-rooms", rooms);
        console.log("users that will meet the condition if 2", users);
        console.log("this is updatedRooms if users===2", rooms);
        console.log("this is rooms if user ===2", rooms);
        return () => socket.off("numberOfUsers");
      }
    });
  }, [setRoomCode]);

  return (
    <div>
      <form>
        <h1 className="joinRoomModal-card-title">Enter a room code</h1>
        <button type="button" onClick={handleRefresh}>
          Refresh Rooms
        </button>
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
