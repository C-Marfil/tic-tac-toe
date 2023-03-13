/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const JoinRoomModal = ({ setRoomCode, socket }) => {
  const [roomCodeInput, setRoomCodeInput] = useState(null);
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    if (roomCodeInput === null) {
      alert("Please select or create a room");
    }
    setRoomCode(roomCodeInput);
    setRooms([...rooms, roomCodeInput]);
    console.log("what rooms is", rooms);
    socket.emit("update-rooms", rooms);
    navigate(`/room${roomCodeInput}`);
  };

  const handleRoomClick = (event) => {
    setRoomCode(event.target.id);
    navigate(`/room${event.target.id}`);
    console.log(event.target.id, "<----- event.target.id");
  };

  useEffect(() => {
    setRoomCode(roomCodeInput);

    socket.on("numberOfUsers", (users, roomCode) => {
      if (users === 2) {
        const index = rooms.indexOf(roomCode);
        const updatedRooms = rooms.splice(index, 1);
        socket.emit("update-rooms", updatedRooms);
        console.log("this is updatedRooms", updatedRooms);
        console.log("this is rooms", rooms);
      }
    });

    socket.on("rooms-incoming", (allRooms) => {
      console.log("allRooms", allRooms);
      setRooms(allRooms);
    });

    return () => socket.off("updateGame");
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
