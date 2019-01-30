import React from 'react';

import './App.css';
import Product from "./components/Product";
import ProductList from "./data/ProductList.json"

function App(){
  const products = ProductList.map(prod => <Product  content={{name:prod.name, description:prod.description, price:prod.price, stars:prod.stars, key:prod.id}}/>)
  return(
    <dir>
      {products}
    </dir>
  );
}

export default App;
