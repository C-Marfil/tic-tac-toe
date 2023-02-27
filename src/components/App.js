import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import io from "socket.io-client";
import "../styles/app.css";
import Chat from "./Chat";
import Room from "./Room";
import Home from "./Home";

const App = () => {
  const [room, setRoom] = useState("");

  return (
    <div>
      <Chat room={room} setRoom={setRoom} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/room${room}`} element={<Room />} />
      </Routes>
    </div>
  );
};

export default App;
