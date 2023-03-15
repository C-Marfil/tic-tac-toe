const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("User Connected");

  socket.on("joinRoom", (roomCode) => {
    const room = io.sockets.adapter.rooms.get(roomCode);
    console.log(`A user joined the room ${roomCode}`);
    socket.join(roomCode);
    const users = room ? room.size : 0;
    console.log(`there are these many users connected to room ${roomCode}:`, users);
    socket.emit("numberOfUsers", users, roomCode);

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

  socket.on("update-rooms", (rooms) => {
    console.log(rooms);
    socket.broadcast.emit("rooms-incoming", rooms);
  })

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

server.listen(5000, () =>
  console.log("server running => http://localhost:5000")
);
