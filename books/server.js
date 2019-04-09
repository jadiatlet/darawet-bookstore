require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoDb =
  "mongodb+srv://admin:<password>@cluster0-bhbnw.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoDb, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDbConnection Error"));

app.get("/", (req, res) => {
  res.send("BOOKS IS OKE");
});

app.listen(8001, () => {
  console.log("Books server running on PORT 8001");
});
