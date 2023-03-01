import React from "react";

const Room = () => {
  const handleLeave = () => {};

  return (
    <>
      <h1>This is the room where the magic happens</h1>
      <button type="button" onClick={handleLeave}>
        Leave the room
      </button>
    </>
  );
};

export default Room;
