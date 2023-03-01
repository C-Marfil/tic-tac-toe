import React from "react";
import PropTypes from "prop-types";
import "./Cell.css";

const Cell = ({ handleCellClick, id, text }) => {
  return (
    <div id={id} className="cell" onClick={handleCellClick}>
      {text}
    </div>
  );
};

Cell.propTypes = {
  handleCellClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Cell;
