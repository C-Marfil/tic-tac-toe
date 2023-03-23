/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import io from "socket.io-client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Home from "./Home/Home";
import JoinRoom from "./JoinRoom/JoinRoom";
import "../styles/app.css";

const socket = io.connect("http://localhost:5000");

const App = () => {
  const [roomCode, setRoomCode] = useState(null);
  const [username, setUsername] = useState("");

  socket.on("clean", () => {
    localStorage.clear();
  });

  useEffect(() => {
    console.log(username);
    console.log(roomCode);
    if (roomCode) {
      socket.emit("joinRoom", roomCode);
    }
  }, [roomCode, username]);

  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <div className="app">
        <Header username={username} roomcode={roomCode} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                socket={socket}
                setUsername={setUsername}
                username={username}
              />
            }
          />
          <Route
            path="/lobby"
            element={
              <JoinRoom
                socket={socket}
                roomCode={roomCode}
                username={username}
                setRoomCode={setRoomCode}
              />
            }
          />
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
    </ChakraProvider>
  );
};

export default App;
