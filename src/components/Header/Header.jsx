import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = (roomCode, socket) => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <header>
      <h1 className="header-title">Connect4 To Be</h1>
      <button type="button" onClick={handleHome}>
        Home
      </button>
      {/* {roomCode && (
        <button type="button" onClick={handleLobby}>
          Return to Lobby
        </button>
      )} */}
    </header>
  );
};

export default Header;
