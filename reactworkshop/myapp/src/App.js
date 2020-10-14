import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from "./Demo";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      {/* <Demo /> */}
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default App;
