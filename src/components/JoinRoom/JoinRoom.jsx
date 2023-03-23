/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";
import "./JoinRoom.css";

const JoinRoom = ({ setRoomCode, socket, roomCode }) => {
  const [roomCodeInput, setRoomCodeInput] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const lobby = JSON.parse(localStorage.getItem("lobby"));

  const handleSave = (e) => {
    e.preventDefault();
    if (roomCodeInput === null) {
      setError(true);
    }
    if (roomCodeInput) {
      socket.emit("update-lobby", roomCodeInput);
      console.log("...updating Lobby");
      setRoomCode(roomCodeInput);
      setError(false);
      navigate(`/room${roomCodeInput}`);
    }
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
    <div className="joinRoomContainer">
      <h1 className="joinRoomCardTitle">Enter a room code</h1>
      <div>
        {/* <button type="button" onClick={handleRefresh}>
            Refresh Rooms
          </button> */}
        <form>
          <input
            type="text"
            aria-label="username-input"
            placeholder="eg: 14"
            value={roomCodeInput}
            onChange={(e) => setRoomCodeInput(e.target.value)}
          />
        </form>
        <Button
          colorScheme="brand"
          className="saveButton"
          variant="solid"
          type="submit"
          onClick={(e) => handleSave(e)}
        >
          Save & Join
        </Button>
        {/* <input
            className="roomcode-input"
            aria-label="roomcode-input"
            type="number"
            value={roomCodeInput}
            placeholder="eg: 1212"
            onChange={(e) => setRoomCodeInput(e.target.value)}
            />
            <button
            type="submit"
            onClick={(e) => handleSave(e)}
            className="JoinRoom-card-button"
            >
            Save
          </button> */}
      </div>
      {rooms.map((room) => {
        return (
          <Button
            colorScheme="brand"
            variant="solid"
            id={room}
            onClick={(e) => {
              handleRoomClick(e);
            }}
          >
            Join Room {room}
          </Button>
        );
      })}
      <Button
        className="refresh-button"
        colorScheme="brand"
        variant="solid"
        onClick={handleRefresh}
      >
        Refresh Rooms
      </Button>
      {error && (
        <p className="roomError">Please enter a room code to create a room</p>
      )}
    </div>
  );
};

JoinRoom.defaultProps = {
  roomCode: null,
};

JoinRoom.propTypes = {
  setRoomCode: PropTypes.func.isRequired,
  roomCode: PropTypes.string,
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
    on: PropTypes.func.isRequired,
  }).isRequired,
};

export default JoinRoom;
