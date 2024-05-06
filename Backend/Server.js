const express = require("express");

const app = express();

const dotenv = require("dotenv");

dotenv.config();

const notes = require("./Data/notes");

app.get("/", (req, res) => {
  res.send("Api Is call");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((item) => item._id === req.params.id);
  res.json(note);
});

const Port = process.env.Port || 5000;

app.listen(Port, console.log("Server is running"));
