const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("User Connected");

  socket.on("joinRoom", (roomCode) => {
    console.log(`A user joined the room ${roomCode}`);
    socket.join(roomCode);
  });

  socket.on("play", ({ id, column, roomCode }) => {
    console.log(`play at column ${column}, tile ${id} at ${roomCode}`);
    socket.broadcast.to(roomCode).emit("updateGame", column, id);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("update-rooms", (data) => {
    console.log(data);
    socket.broadcast.emit("rooms-incoming", data);
  })

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

server.listen(5000, () =>
  console.log("server running => http://localhost:5000")
);
