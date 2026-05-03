//import express
const express = require("express");
//cors
const cors = require("cors");
//mongoose
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/AuthenticationDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection Error: ", err));

//create express app
const app = express();
const port = 7777;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("api is ready for use");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
