// models/Product.js
const mongoose = require('mongoose');

// Define the schema for the product
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Create and export the 'Product' model based on the schema
module.exports = mongoose.model('Product', productSchema);
