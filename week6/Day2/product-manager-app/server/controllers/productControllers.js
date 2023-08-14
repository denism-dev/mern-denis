// server/controllers/productController.js
const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const { title, price, description } = req.body;
    const newProduct = new Product({ title, price, description });
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Error creating product' });
  }
};
