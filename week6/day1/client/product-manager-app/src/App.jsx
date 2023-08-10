// src/App.js
import React from 'react';
import ProductForm from './components/ProductForm';

const App = () => {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      {/* Include the ProductForm component */}
      <ProductForm />
    </div>
  );
};

export default App;
