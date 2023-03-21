/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ChakraProvider,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Button,
  Box,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

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
    <ChakraProvider>
      <div>
        <form>
          <h1 className="JoinRoom-card-title">Enter a room code</h1>
          {/* <button type="button" onClick={handleRefresh}>
            Refresh Rooms
          </button> */}
          <Flex display="flex" alignItems="center" justifyContent="center">
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
            <Button
              colorScheme="teal"
              variant="solid"
              type="submit"
              onClick={(e) => handleSave(e)}
            >
              Save
            </Button>
          </Flex>
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
        </form>
        <Box display="flex" alignItems="center" justifyContent="center">
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
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Button
            spacing={5}
            size="xsm"
            colorScheme="teal"
            variant="solid"
            onClick={handleRefresh}
          >
            Refresh Rooms
          </Button>
        </Box>
      </div>
    </ChakraProvider>
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
