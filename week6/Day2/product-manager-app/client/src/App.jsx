import { useState } from 'react'

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/products/:id" component={ProductDetail} />
          <Route exact path="/" component={ProductForm} />
        </Switch>
        <ProductList />
      </div>
    </Router>
  );
}

export default App;
