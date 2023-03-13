/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Cell from "../Cell/Cell";
import "./main.css";
import checkWin from "./helperWin";
import Chat from "../Chat/Chat";

const Main = ({ socket, roomCode }) => {
  const [board, setBoard] = useState({
    column1: ["", "", "", "", "", ""],
    column2: ["", "", "", "", "", ""],
    column3: ["", "", "", "", "", ""],
    column4: ["", "", "", "", "", ""],
    column5: ["", "", "", "", "", ""],
    column6: ["", "", "", "", "", ""],
    column7: ["", "", "", "", "", ""],
  });
  const [canPlay, setCanPlay] = useState(true);
  const [username, setUsername] = useState("");
  const updatedBoard = board;
  const updatedRivalBoard = board;

  useEffect(() => {
    socket.on(
      "updateGame",
      (rivalMove) => {
        console.log("this is the Rival Board", rivalMove);
        setBoard(rivalMove);
        setCanPlay(true);
      },
      [updatedBoard, board]
    );

    return () => socket.off("updateGame");
  });

  const handleCellClick = (e) => {
    const { id } = e.currentTarget;
    const column = id.split(".")[1].split("[")[0];
    const position = id.split(".")[1].split("[")[1][0];

    if (canPlay && updatedBoard[column][position] === "") {
      updatedBoard[column][position] = "🔴";
      console.log("move made by player", updatedBoard);
      setBoard(updatedBoard);
      socket.emit("play", {
        id,
        column,
        position,
        roomCode,
        updatedRivalBoard,
      });
      setCanPlay(false);
      checkWin(updatedBoard);
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
        {/* Column1 */}
        <Cell
          handleCellClick={handleCellClick}
          id="board.column1[0]"
          text={updatedBoard.column1[0]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column1[1]"
          text={updatedBoard.column1[1]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column1[2]"
          text={updatedBoard.column1[2]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column1[3]"
          text={board.column1[3]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column1[4]"
          text={board.column1[4]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column1[5]"
          text={board.column1[5]}
        />
        {/* Column2 */}
        <Cell
          handleCellClick={handleCellClick}
          id="board.column2[0]"
          text={board.column2[0]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column2[1]"
          text={board.column2[1]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column2[2]"
          text={board.column2[2]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column2[3]"
          text={board.column2[3]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column2[4]"
          text={board.column2[4]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column2[5]"
          text={board.column2[5]}
        />
        {/* Column 3 */}
        <Cell
          handleCellClick={handleCellClick}
          id="board.column3[0]"
          text={board.column3[0]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column3[1]"
          text={board.column3[1]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column3[2]"
          text={board.column3[2]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column3[3]"
          text={board.column3[3]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column3[4]"
          text={board.column3[4]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column3[5]"
          text={board.column3[5]}
        />
        {/* Column 4 */}
        <Cell
          handleCellClick={handleCellClick}
          id="board.column4[0]"
          text={board.column4[0]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column4[1]"
          text={board.column4[1]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column4[2]"
          text={board.column4[2]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column4[3]"
          text={board.column4[3]}
        />
         <Cell
          handleCellClick={handleCellClick}
          id="board.column4[4]"
          text={board.column4[4]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column4[5]"
          text={board.column4[5]}
        />
        {/* Column 5 */}
        <Cell
          handleCellClick={handleCellClick}
          id="board.column5[0]"
          text={updatedBoard.column5[0]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column5[1]"
          text={updatedBoard.column5[1]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column5[2]"
          text={updatedBoard.column5[2]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column5[3]"
          text={board.column5[3]}
        />
         <Cell
          handleCellClick={handleCellClick}
          id="board.column5[4]"
          text={board.column5[4]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column5[5]"
          text={board.column5[5]}
        />
        {/* Column 6 */}
        <Cell
          handleCellClick={handleCellClick}
          id="board.column6[0]"
          text={updatedBoard.column6[0]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column6[1]"
          text={updatedBoard.column6[1]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column6[2]"
          text={updatedBoard.column6[2]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column6[3]"
          text={board.column6[3]}
        />
         <Cell
          handleCellClick={handleCellClick}
          id="board.column6[4]"
          text={board.column6[4]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column6[5]"
          text={board.column6[5]}
        />
        {/* Column 7 */}
        <Cell
          handleCellClick={handleCellClick}
          id="board.column7[0]"
          text={updatedBoard.column7[0]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column7[1]"
          text={updatedBoard.column7[1]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column7[2]"
          text={updatedBoard.column7[2]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column7[3]"
          text={board.column7[3]}
        />
         <Cell
          handleCellClick={handleCellClick}
          id="board.column7[4]"
          text={board.column7[4]}
        />
        <Cell
          handleCellClick={handleCellClick}
          id="board.column7[5]"
          text={board.column7[5]}
        />
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
