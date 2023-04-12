const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  }
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
