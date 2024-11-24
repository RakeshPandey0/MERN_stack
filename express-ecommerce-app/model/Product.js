const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  price: Number,
//   user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Task = mongoose.model("Product", productSchema);

module.exports = Task;