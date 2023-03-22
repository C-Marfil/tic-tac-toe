import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <header>
      <h1 className="header-title">Tic-Tac-Toe</h1>
      <Button type="button" onClick={handleHome}>
        Home
      </Button>
    </header>
  );
};

export default Header;
