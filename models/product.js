const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    quantity: {
      type: Number,
    },
  },
  {
    timeseries: true,
  }
);

const product = mongoose.model("Product", productSchema);
module.exports = product;
