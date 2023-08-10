// src/components/ProductForm.js
import React, { useState } from 'react';

const ProductForm = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { title, price, description };

    try {
      // Send a POST request to the server API to create a new product
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      // Parse the response JSON and log the new product details
      const data = await response.json();
      console.log('New product created:', data);

      // Clear form fields after successful submission
      setTitle('');
      setPrice('');
      setDescription('');
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
