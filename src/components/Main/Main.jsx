/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Column from "../Cell/Column";
import "./main.css";
import Chat from "../Chat/Chat";

const Main = ({ socket, roomCode, username }) => {
  const [board, setBoard] = useState({
    column1: [],
    column2: [],
  });

  const [canPlay, setCanPlay] = useState(true);

  useEffect(() => {
    socket.on("updateGame", (id) => {
      console.log("use Effect", id);
      setBoard(() => ({ ...board, id: "O" }));
      setCanPlay(true);
    });

    return () => socket.off("updateGame");
  });

  const handleColumnClick = (e) => {
    const { id } = e.currentTarget;
    console.log("ID before IF STATEMENT");
    if (canPlay) {
      setBoard({ ...board, id: { [cell]: "X" } });
      console.log("board", board);
      socket.emit("play", { id, cell, roomCode });
      setCanPlay(false);
    }
  };

  return (
    <main>
      <div>
        {username !== "" && (
          <Chat roomCode={roomCode} username={username} socket={socket} />
        )}
      </div>
      <section className="main-section">
        <Column
          handleColumnClick={handleColumnClick}
          board={board}
          setBoard={setBoard}
        />
      </section>
    </main>
  );
};

Main.defaultProps = {
  roomCode: null,
};

Main.propTypes = {
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  socket: PropTypes.object.isRequired,
  roomCode: PropTypes.string,
};

export default Main;
