/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const JoinRoomModal = ({ setRoomCode, socket, roomCode }) => {
  const [roomCodeInput, setRoomCodeInput] = useState(null);
  const [rooms, setRooms] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const lobby = JSON.parse(localStorage.getItem("lobby"));

  const handleSave = (e) => {
    e.preventDefault();
    if (roomCodeInput === null) {
      alert("Please select or create a room");
    }
    socket.emit("update-lobby", roomCodeInput);
    console.log("...updating Lobby");
    setRoomCode(roomCodeInput);
    navigate(`/room${roomCodeInput}`);
  };

  socket.on("rawRoomsString-incoming", (rawRoomsString) => {
    console.log("...setting lobby in localStorage");
    localStorage.setItem("lobby", rawRoomsString);
    setRooms(lobby);
  });

  const handleRoomClick = (e) => {
    const buttonID = e.target.id;
    setRoomCode(buttonID);
    socket.emit("update-lobby", roomCode);
    console.log("...updating Lobby");
    navigate(`/room${e.target.id}`);
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
    if (roomCode !== null) {
      socket.emit("update-lobby", roomCode);
      console.log("...updating Lobby");
    }
  }, [roomCode]);

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

JoinRoomModal.defaultProps = {
  roomCode: null,
};

JoinRoomModal.propTypes = {
  setRoomCode: PropTypes.func.isRequired,
  roomCode: PropTypes.string,
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
    on: PropTypes.func.isRequired,
  }).isRequired,
};

export default JoinRoomModal;
