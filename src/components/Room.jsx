import React from "react";
import ConnectFourGame from "./Connect4";

const Room = () => {
  const handleLeave = () => {};

  return (
    <>
      <h1>This is the room where the magic happens</h1>
      <ConnectFourGame />
      <button type="button" onClick={handleLeave}>
        Leave the room
      </button>
    </>
  );
};

export default Room;
