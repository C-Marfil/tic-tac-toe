/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import JoinRoomModal from "./JoinRoomModal/JoinRoomModal";

const socket = io.connect("http://localhost:5000");

const App = () => {
  const [roomCode, setRoomCode] = useState(null);

  useEffect(() => {
    console.log(roomCode);
    if (roomCode) {
      socket.emit("joinRoom", roomCode);
    }
  }, [roomCode]);

  return (
    <>
      <JoinRoomModal socket={socket} setRoomCode={setRoomCode} />
      <Header />
      <Main socket={socket} roomCode={roomCode} />
    </>
  );
};

export default App;
