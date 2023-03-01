/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import JoinRoomModal from "./JoinRoomModal/JoinRoomModal";

const socket = io.connect("http://localhost:5000");

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [roomCode, setRoomCode] = useState(null);

  useEffect(() => {
    console.log(roomCode);
    if (roomCode) {
      socket.emit("joinRoom", roomCode);
    }
  }, [roomCode]);

  return (
    <>
      <JoinRoomModal
        showModal={showModal}
        setShowModal={setShowModal}
        setRoomCode={setRoomCode}
      />
      <Header />
      <Main socket={socket} roomCode={roomCode} />
      <Footer setShowModal={setShowModal} />
    </>
  );
};

export default App;
