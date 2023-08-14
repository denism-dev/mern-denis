
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
    <h2>All Products</h2>
    <ul>
      {products.map(product => (
        <li key={product._id}>
          <Link to={`/products/${product._id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default ProductList;
