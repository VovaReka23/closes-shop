import React from 'react';
import ProductList from './page/ProductList';
import ProductDetails from './page/ProductDetails';
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route exact path="/Product-app">
        <ProductList />
      </Route>
      <Route path="/Product-app/:productId">
        <ProductDetails />
      </Route>
    </Switch>

  );
}

export default App;
