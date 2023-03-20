import React, { useState } from "react";
import GameColumn from "./GameColumn";
import "../styles/connect4.css";

const X_PIECE = "🧶";
const O_PIECE = "🖖🏽";

const ConnectFourGame = () => {
  const initial = {};
  for (let c = 0; c < 7; c += 1) {
    initial[c] = [null, null, null, null, null, null];
  }

  const [gameState, setGameState] = useState(initial);
  const [currentPlayer, setCurrentPlayer] = useState(X_PIECE);
  const [winner, setWinner] = useState(null);

  const gameOver = (currentPlayer) => {
    let column;
    for (let c = 0; c < 7; c += 1) {
      for (let r = 0; r < 6 - 3; r += 1) {
        if (
          gameState[c][r] != null &&
          gameState[c][r] === gameState[c][r + 1] &&
          gameState[c][r + 1] === gameState[c][r + 2] &&
          gameState[c][r + 2] === gameState[c][r + 3]
        ) {
          return true;
        }
      }
    }
    for (let c = 0; c < 7 - 3; c += 1) {
      for (let r = 0; r < 6; r += 1) {
        if (
          gameState[c][r] != null &&
          gameState[c][r] === gameState[c + 1][r] &&
          gameState[c + 1][r] === gameState[c + 2][r] &&
          gameState[c + 2][r] === gameState[c + 3][r]
        ) {
          return true;
        }
      }
    }
    for (let c = 0; c < 7; c += 1) {
      for (let r = 0; r < 6; r += 1) {
        if (
          gameState[c][r] != null &&
          gameState[c][r] === gameState[c + 1][r + 1] &&
          gameState[c + 1][r + 1] === gameState[c + 2][r - 2] &&
          gameState[c + 2][r + 2] === gameState[c + 3][r + 3]
        ) {
          return true;
        }
      }
    }
    for (let c = 0; c < 7; c += 1) {
      for (let r = 5; r >= 3; r -= 1) {
        if (
          gameState[c][r] != null &&
          gameState[c][r] === gameState[c + 1][r - 1] &&
          gameState[c + 1][r - 1] === gameState[c + 2][r - 2] &&
          gameState[c + 2][r - 2] === gameState[c + 3][r - 3]
        ) {
          return true;
        }
      }
    }

    return false;
  };

  const addPiece = (columnIdx) => {
    console.log(columnIdx);
    const column = gameState[columnIdx];
    const piecePos = column.indexOf(null);
    column[piecePos] = currentPlayer;
    setGameState({ ...gameState, [columnIdx]: column });

    if (gameOver(currentPlayer)) {
      setWinner(currentPlayer);
    }

    setCurrentPlayer(currentPlayer === X_PIECE ? O_PIECE : X_PIECE);
  };

  if (winner) {
    return <h1>{winner} is the winner</h1>;
  }
  return (
    <div className="board">
      {Object.entries(gameState).map(([k, col], x) => {
        return <GameColumn col={col} idx={x} onClick={() => addPiece(x)} />;
      })}
    </div>
  );
};
export default ConnectFourGame;
