const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io")

const PORT = 3001;
const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

server.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`)

    socket.on("join_room", (data) => {
        socket.join(data);
        });
        
    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
        console.log(data.message);
    })
})


    