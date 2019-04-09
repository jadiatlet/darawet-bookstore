const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  numberPages: {
    type: Number,
    required: false
  },
  publisher: {
    type: String,
    required: false
  }
});

// Compile model from schema
module.exports = mongoose.model("SomeModel", bookSchema);
