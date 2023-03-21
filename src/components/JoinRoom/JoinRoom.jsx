/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from "@chakra-ui/react";
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
    <div className="main-join-room">
      <h1 className="JoinRoom-card-title">Enter a room code</h1>
      <div className="red">
        {/* <button type="button" onClick={handleRefresh}>
            Refresh Rooms
          </button> */}
        <form>
          <NumberInput
            className="NumberInput"
            min={1}
            max={99}
            width="auto"
            size="md"
          >
            <NumberInputField
              value={roomCodeInput}
              placeholder="eg: 14"
              onChange={(e) => setRoomCodeInput(e.target.value)}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </form>
        <Button
          className="saveButton"
          colorScheme="teal"
          variant="solid"
          type="submit"
          onClick={(e) => handleSave(e)}
        >
          Save
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
        {error && <p>Please enter a room code to create a room</p>}
      </div>
      {rooms.map((room) => {
        return (
          <Button
            colorScheme="teal"
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
        colorScheme="teal"
        variant="solid"
        onClick={handleRefresh}
      >
        Refresh Rooms
      </Button>
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
