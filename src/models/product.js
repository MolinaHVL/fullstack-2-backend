const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  temperature: {
    type: Number,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
  heaterStatus: {
    type: Boolean,
    required: true,
  },
  lightStatus: {
    type: Boolean,
    required: true,
  },
  fanStatus: {
    type: Boolean,
    required: true,
  }


});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
