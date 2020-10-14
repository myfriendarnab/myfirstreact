import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Currency from "./components/Currency";
// import Demo from "./Demo";
import ProductList from "./components/container/ProductList";

function App() {
  return (
    <div className="App">
      {/* <Demo /> */}
      <Currency currencyChange={(currencycode)=> console.log(currencycode)} />
      <ProductList />
    </div>
  );
}

export default App;
