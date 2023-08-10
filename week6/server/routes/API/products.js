// routes/api/products.js
const express = require('express');
const router = express.Router();
const productController = require('../../controllers/productController');

// Define a POST route to handle creating new products
router.post('/', productController.createProduct);

module.exports = router;
