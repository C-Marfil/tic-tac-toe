/* eslint-disable no-alert */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import "../Chat/chat.css";
import "./home.css";

const Home = ({ setUsername, username }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleUsername = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  return (
    <div className="home">
      <div className="joinChatContainer">
        <input
          type="text"
          aria-label="username-input"
          placeholder="Enter your name"
          onChange={(event) => {
            handleUsername(event);
          }}
        />
        <Button
          colorScheme="brand"
          type="button"
          onClick={() => {
            if (username) {
              navigate("/lobby");
            } else {
              setError(true);
            }
          }}
        >
          PLAY!
        </Button>
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
