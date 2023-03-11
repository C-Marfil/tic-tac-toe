/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Column.css";

const Column = ({ board, setBoard }) => {
  const [amount, setAmount] = useState(board.column1.length);

  const handleColumnClick = () => {
    e.preventDefault();
    console.log(board, "before setting");
    if (amount === 0) {
      setBoard(board.column1.push("X"));
      console.log(board, "after first move");
    }
    if (amount >= 1) {
      setBoard((prev) => {
        prev.map((tile) => tile + 1);
      });
      setBoard(board.column1.push("X"));
      console.log(board, "ever after");
    }
  };

  return (
    <div className="cell" onClick={(e) => handleColumnClick}>
      <div id="cell0">TEST{board.column1[0]}</div>
      <div id="cell1">TEST{board.column1[1]}</div>
      <div id="cell2">TEST{board.column1[2]}</div>
      <div id="cell3">TEST{board.column1[3]}</div>
      <div id="cell4">TEST{board.column1[4]}</div>
    </div>
  );
};

Column.propTypes = {
  setBoard: PropTypes.func.isRequired,
  column1: PropTypes.arrayOf.isRequired,
  board: PropTypes.object.isRequired,
};

export default Column;
