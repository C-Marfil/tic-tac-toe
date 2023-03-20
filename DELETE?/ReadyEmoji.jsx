import React, { useState } from "react";
import PropTypes from "prop-types";
import io from "socket.io-client";

const ReadyEmoji = ({ room }) => {
  const [isReady, setIsReady] = useState(false);
  const [waiting, setWaiting] = useState(false);

  const socket = io.connect("http://localhost:3001");

  const handleReady = () => {
    if (room !== "") {
      setWaiting(true);
      socket.emit("isReady?", { room });
    }
  };

  socket.on("isReady", () => {
    setWaiting(false);
    setIsReady(true);
  });

  if (waiting) {
    return <h1>Waiting for your rival...</h1>;
  }
  if (isReady) {
    return <h1>Ready!</h1>;
  }
  return (
    <button type="button" onClick={handleReady}>
      Are you ready?
    </button>
  );
};

ReadyEmoji.propTypes = {
  room: PropTypes.string.isRequired,
};

export default ReadyEmoji;
