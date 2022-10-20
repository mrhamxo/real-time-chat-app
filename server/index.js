const http = require("http");
const express = require("express");
const cors = require("cors");
const socketio = require("socket.io");

const app = express();
const port = 8000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to my server Home fromsky to show my knowladge skills thanks in advances</h1>")
})

const server = http.createServer(app);

const io = socketio(server);

io.on("connection", () => {
  console.log("new connection");
})

server.listen(port, () => {
  console.log(`server is running on ${port}`);
});
