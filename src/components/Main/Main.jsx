/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Cell from "../Cell/Cell";
import "./main.css";
import Chat from "../Chat/Chat";

const Main = ({ socket, roomCode, username }) => {
  const rowOne = ["", "", "", "", "", "", ""];
  const rowTwo = ["", "", "", "", "", "", ""];
  const rowThree = ["", "", "", "", "", "", ""];
  const rowFour = ["", "", "", "", "", "", ""];
  const rowFive = ["", "", "", "", "", "", ""];
  const rowSix = ["", "", "", "", "", "", ""];

  const [board, setBoard] = useState([
    rowOne,
    rowTwo,
    rowThree,
    rowFour,
    rowFive,
    rowSix,
  ]);
  const [canPlay, setCanPlay] = useState(true);

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
      setBoard([rowOne, rowTwo, rowThree, rowFour, rowFive, rowSix]);
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
        <Cell handleCellClick={handleCellClick} id="0" text={board[0]} />
        <Cell handleCellClick={handleCellClick} id="1" text={board[1]} />
        <Cell handleCellClick={handleCellClick} id="2" text={board[2]} />
        <Cell handleCellClick={handleCellClick} id="3" text={board[3]} />
        <Cell handleCellClick={handleCellClick} id="4" text={board[4]} />
        <Cell handleCellClick={handleCellClick} id="5" text={board[5]} />
        <Cell handleCellClick={handleCellClick} id="6" text={board[6]} />

        <Cell handleCellClick={handleCellClick} id="7" text={board[1][0]} />
        <Cell handleCellClick={handleCellClick} id="8" text={board[8]} />
        <Cell handleCellClick={handleCellClick} id="9" text={board[9]} />
        <Cell handleCellClick={handleCellClick} id="10" text={board[10]} />
        <Cell handleCellClick={handleCellClick} id="11" text={board[11]} />
        <Cell handleCellClick={handleCellClick} id="12" text={board[12]} />

        <Cell handleCellClick={handleCellClick} id="13" text={board[13]} />
        <Cell handleCellClick={handleCellClick} id="14" text={board[14]} />
        <Cell handleCellClick={handleCellClick} id="15" text={board[15]} />
        <Cell handleCellClick={handleCellClick} id="16" text={board[16]} />
        <Cell handleCellClick={handleCellClick} id="17" text={board[17]} />
        <Cell handleCellClick={handleCellClick} id="18" text={board[18]} />

        <Cell handleCellClick={handleCellClick} id="19" text={board[19]} />
        <Cell handleCellClick={handleCellClick} id="20" text={board[20]} />
        <Cell handleCellClick={handleCellClick} id="21" text={board[21]} />
        <Cell handleCellClick={handleCellClick} id="22" text={board[22]} />
        <Cell handleCellClick={handleCellClick} id="23" text={board[23]} />
        <Cell handleCellClick={handleCellClick} id="24" text={board[24]} />

        <Cell handleCellClick={handleCellClick} id="25" text={board[25]} />
        <Cell handleCellClick={handleCellClick} id="26" text={board[26]} />
        <Cell handleCellClick={handleCellClick} id="27" text={board[27]} />
        <Cell handleCellClick={handleCellClick} id="28" text={board[28]} />
        <Cell handleCellClick={handleCellClick} id="29" text={board[29]} />
        <Cell handleCellClick={handleCellClick} id="30" text={board[30]} />

        <Cell handleCellClick={handleCellClick} id="31" text={board[31]} />
        <Cell handleCellClick={handleCellClick} id="32" text={board[32]} />
        <Cell handleCellClick={handleCellClick} id="33" text={board[33]} />
        <Cell handleCellClick={handleCellClick} id="34" text={board[34]} />
        <Cell handleCellClick={handleCellClick} id="35" text={board[35]} />
        <Cell handleCellClick={handleCellClick} id="36" text={board[36]} />

        <Cell handleCellClick={handleCellClick} id="37" text={board[37]} />
        <Cell handleCellClick={handleCellClick} id="38" text={board[38]} />
        <Cell handleCellClick={handleCellClick} id="39" text={board[39]} />
        <Cell handleCellClick={handleCellClick} id="40" text={board[40]} />
        <Cell handleCellClick={handleCellClick} id="41" text={board[41]} />
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
