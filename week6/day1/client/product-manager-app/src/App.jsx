// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Product Manager</h1>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/products/:id" component={ProductDetail} />
        </Switch>
        <ProductForm />
      </div>
    </Router>
  );
};

export default App;
