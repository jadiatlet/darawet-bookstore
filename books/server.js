require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  `mongodb+srv://${process.env.DB_DEV_USERNAME}:${process.env.DB_DEV_PASSWORD}@cluster0-bhbnw.mongodb.net/test?retryWrites=true`,
  { useNewUrlParser: true },
  () => {
    console.log("DATABASE CONNECTED");
  }
);

app.get("/", (req, res) => {
  res.send("BOOKS IS OKE");
});

app.listen(8001, () => {
  console.log("Books server running on PORT 8001");
});
