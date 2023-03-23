const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

let rawRooms = [];
let users = 0;

io.on("connection", (socket) => {
  console.log("User Connected");

  socket.on("joinRoom", (roomCode) => {
    console.log(`A user joined the room ${roomCode}`);
    socket.join(roomCode);
    console.log(`there are these many users connected to room ${roomCode}:`, io.sockets.adapter.rooms.get(roomCode).size);
  });

  socket.on("play", ({ id, column, position, roomCode, updatedBoard }) => {
    console.log(`play at ${column}, cell ${position} at ${roomCode}`);
    console.log('this is id in server', id);
   
      updatedBoard[column][position] === "🟡";
   

    socket.broadcast.to(roomCode).emit("updateGame", updatedBoard, column, position);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("update-lobby", (roomCode) => {
    const repeatedCode = rawRooms.find((x) => x === roomCode);
    const index = rawRooms.indexOf(roomCode);

    if(repeatedCode) {
      rawRooms.splice(index, 1);
      console.log("repeated room... deleting!");
    }

    rawRooms.push(roomCode);
    socket.join(roomCode);
    
    if (io.sockets.adapter.rooms.has(roomCode)) {
    users = io.sockets.adapter.rooms.get(roomCode).size;
    
    console.log("RawRooms:", rawRooms);
    console.log(`there are these many users connected to room ${roomCode}:`, io.sockets.adapter.rooms.get(roomCode).size);

    if(users === 2) {
      rawRooms.splice(index, 1);
      console.log("room full");
    };
    
    const rawRoomsString = JSON.stringify(rawRooms);

    socket.broadcast.emit("rawRoomsString-incoming", rawRoomsString);
  }
  });

  socket.on("leave-room", (roomCode) => {
    const index = rawRooms.indexOf(roomCode);
    const rawRoomsString = JSON.stringify(rawRooms);

    socket.leave(roomCode);
    console.log(`User left room ${roomCode}`);

    rawRooms.splice(index, 1);
    console.log("room empty");    
    socket.broadcast.emit("rawRoomsString-incoming", rawRoomsString);
  });

  socket.on("gameover", (roomCode) => {
    socket.broadcast.to(roomCode).emit("you-lose");
  })

  socket.on("disconnect", () => {
    socket.emit("clean");
    rawRooms = [];
    console.log("User Disconnected");
  });
});

server.listen(5000, () =>
  console.log("server running => http://localhost:5000")
);
