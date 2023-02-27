import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";

const Chat = ({ room, setRoom }) => {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const navigate = useNavigate();
  const socket = io.connect("http://localhost:3001");

  const handleSendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  const handleJoinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
      console.log(room);
      navigate(`/room${room}`);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  });

  return (
    <>
      <input
        type="text"
        placeholder="Room number"
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button type="button" onClick={handleJoinRoom}>
        Join Room
      </button>
      <input
        type="text"
        placeholder="Chat"
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <h2>{messageReceived}</h2>
      <button type="button" onClick={handleSendMessage}>
        Send Message
      </button>
    </>
  );
};

Chat.propTypes = {
  room: PropTypes.string.isRequired,
  setRoom: PropTypes.func.isRequired,
};

export default Chat;
