/* eslint-disable no-alert */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Home = ({ setUsername, username }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleUsername = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  return (
    <div>
      <div className="joinChatContainer">
        <h3>Join the Conversation</h3>
        <input
          type="text"
          aria-label="username-input"
          placeholder="Username..."
          onChange={(event) => {
            handleUsername(event);
          }}
        />
        <button
          type="button"
          onClick={() => {
            if (username) {
              navigate("/lobby");
            } else {
              setError(true);
            }
          }}
        >
          👍
        </button>
        {error && <p>Please enter your username before proceeding</p>}
      </div>
    </div>
  );
};

Home.propTypes = {
  setUsername: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default Home;
