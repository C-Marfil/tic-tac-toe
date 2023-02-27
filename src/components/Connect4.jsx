import React, { useState } from "react";
import GameColumn from "./GameColumn";
import "../styles/connect4.css";

const ConnectFourGame = () => {
  const initial = [];
  for (let c = 0; c < 7; c += 1) {
    initial.push([1, 2, 3, 4, 5, 6]);
  }

  const [gameState, setGameState] = useState(initial);

  return (
    <div className="board">
      {gameState.map((col) => {
        return <GameColumn col={col} />;
      })}
    </div>
  );
};
export default ConnectFourGame;
