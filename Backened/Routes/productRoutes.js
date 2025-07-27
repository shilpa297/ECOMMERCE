const express = require('express');
const router = express.Router();
const { getProducts, createProduct, getProductById, updateProduct, deleteProduct } = require('../Controllers/productController');

// Get all products
router.get('/', getProducts);

// Create a new product
router.post('/', createProduct);

// Get a single product by id
router.get('/:id', getProductById);

// Update product by id
router.put('/:id', updateProduct);

// Delete product by id
router.delete('/:id', deleteProduct);

module.exports = router;
