// controllers/productController.js
const Product = require('../models/Product');

module.exports = {
  createProduct: async (req, res) => {
    try {
      // Extract product details from the request body
      const { title, price, description } = req.body;
      // Create a new Product instance
      const newProduct = new Product({ title, price, description });
      // Save the new product to the database
      const savedProduct = await newProduct.save();
      // Respond with the saved product as JSON
      res.json(savedProduct);
    } catch (error) {
      console.error(error);
      // If an error occurs, send a 500 (Internal Server Error) response
      res.status(500).json({ message: 'Server error' });
    }
  },
};
