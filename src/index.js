const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const studentsRouter = require("./routes/students");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello Bootcamp!" });
});

app.use("/students", studentsRouter);

const connectDb = () => {
  mongoose.connect(process.env.DB_URI);
  console.log("Database connected");
};

const server = app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
  connectDb();
});

const io = require('socket.io')(server, {
  cors: { origin: '*' }
});

io.on("connection", (socket) => {
  console.log("A user connected to the chat");

  // Handle incoming messages
  socket.on("message", (data) => {
    console.log("Received message:", data);
    // Broadcast the message to all connected clients
    io.emit("message", data);
  });

  // Handle disconnections
  socket.on("disconnect", () => {
    console.log("A user disconnected from the chat");
  });
});

module.exports = { app, server };
