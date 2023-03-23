import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";
import "./Header.css";
import logo from "./logo.png";

const Header = ({ username, roomCode }) => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <header>
      <img alt="logo" className="logo" src={logo} />
      {username && roomCode && (
        <Button
          className="home-button"
          colorScheme="brand"
          variant="solid"
          onClick={handleHome}
        >
          Home
        </Button>
      )}
    </header>
  );
};

Header.propTypes = {
  username: PropTypes.string.isRequired,
  roomCode: PropTypes.string.isRequired,
};

export default Header;
