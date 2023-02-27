import React from "react";
import PropTypes from "prop-types";
import "../styles/gamecolumn.css";

const GameColumn = ({ col }) => {
  console.log(col);
  return (
    <div className="column">
      {col.map((cell) => {
        return <span className="cell">{cell}</span>;
      })}
    </div>
  );
};

export default GameColumn;

GameColumn.propTypes = {
  col: PropTypes.string.isRequired,
};
