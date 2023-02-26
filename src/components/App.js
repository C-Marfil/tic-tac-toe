import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "../styles/app.css";

const App = () => {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [room, setRoom] = useState("");

  const socket = io.connect("http://localhost:3001");

  const handleSendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  const handleJoinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <div>
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
    </div>
  );
};

export default App;
