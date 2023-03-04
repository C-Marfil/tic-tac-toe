/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Cell from "../Cell/Cell";
import "./main.css";
import Chat from "../Chat/Chat";

const Main = ({ socket, roomCode }) => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [canPlay, setCanPlay] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    socket.on("updateGame", (id) => {
      console.log("use Effect", id);
      setBoard((data) => ({ ...data, [id]: "O" }));
      setCanPlay(true);
    });

    return () => socket.off("updateGame");
  });

  const handleCellClick = (e) => {
    const { id } = e.currentTarget;
    if (canPlay && board[id] === "") {
      setBoard((data) => ({ ...data, [id]: "X" }));
      socket.emit("play", { id, roomCode });
      setCanPlay(false);
    }

    if (
      (board[0] === "X" && board[1] === "X" && board[2] === "X") ||
      (board[0] === "O" && board[1] === "O" && board[2] === "O")
    ) {
      setBoard(["", "", "", "", "", "", "", "", ""]);
    }
  };

  return (
    <main>
      <div>
        {roomCode !== null && (
          <Chat
            roomCode={roomCode}
            username={username}
            setUsername={setUsername}
            socket={socket}
          />
        )}
      </div>
      <section className="main-section">
        <Cell handleCellClick={handleCellClick} id="0" text={board[0]} />
        <Cell handleCellClick={handleCellClick} id="1" text={board[1]} />
        <Cell handleCellClick={handleCellClick} id="2" text={board[2]} />

        <Cell handleCellClick={handleCellClick} id="3" text={board[3]} />
        <Cell handleCellClick={handleCellClick} id="4" text={board[4]} />
        <Cell handleCellClick={handleCellClick} id="5" text={board[5]} />

        <Cell handleCellClick={handleCellClick} id="6" text={board[6]} />
        <Cell handleCellClick={handleCellClick} id="7" text={board[7]} />
        <Cell handleCellClick={handleCellClick} id="8" text={board[8]} />
      </section>
    </main>
  );
};

Main.defaultProps = {
  roomCode: null,
};

Main.propTypes = {
  socket: PropTypes.object.isRequired,
  roomCode: PropTypes.string,
};
export default Main;
