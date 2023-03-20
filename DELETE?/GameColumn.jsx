import React from "react";
import PropTypes from "prop-types";
import "../styles/gamecolumn.css";

const GameColumn = ({ col, idx, onClick }) => {
  return (
    <div className="column" key={idx} onClick={onClick}>
      {col.map((cell, x) => {
        return (
          <span className="cell" key={`cell-${idx}-${x}`}>
            {cell}
          </span>
        );
      })}
    </div>
  );
};

export default GameColumn;

GameColumn.propTypes = {
  col: PropTypes.string.isRequired,
};
