/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import io from "socket.io-client";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Home from "./Home/Home";
// import Footer from "./Footer/Footer";
import JoinRoom from "./JoinRoom/JoinRoom";

const socket = io.connect("http://localhost:5000");

const App = () => {
  const [roomCode, setRoomCode] = useState(null);
  const [username, setUsername] = useState("");

  useEffect(() => {
    console.log(roomCode);
    if (roomCode) {
      socket.emit("joinRoom", roomCode);
    }
  }, [roomCode]);

  return (
    <div>
      <Header roomCode={roomCode} />
      <Routes>
        <Route
          path="/"
          element={<Home setUsername={setUsername} username={username} />}
        />
        {username && (
          <Route
            path="/lobby"
            element={<JoinRoom socket={socket} setRoomCode={setRoomCode} />}
          />
        )}

        <Route
          path={`/room${roomCode}`}
          element={
            <Main
              username={username}
              setUsername={setUsername}
              socket={socket}
              roomCode={roomCode}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
