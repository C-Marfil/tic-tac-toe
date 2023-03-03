import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Chat = ({ socket, roomCode }) => {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const handleSendMessage = () => {
    socket.emit("send_message", { message, roomCode });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  });

  return (
    <div>
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <h2>{messageReceived}</h2>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Chat"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <button type="button" onClick={handleSendMessage}>
          &#9658;
        </button>
      </div>
    </div>
  );
};

Chat.propTypes = {
  roomCode: PropTypes.string.isRequired,
  socket: PropTypes.object.isRequired,
};

export default Chat;
