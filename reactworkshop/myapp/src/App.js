import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Currency from "./components/Currency";
// import PureComponentDemo from "./PureComponentDemo";
// import ProductList from "./components/container/ProductList";
// import Checkout from "./components/container/Checkout";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeContext } from "./context";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/container/Header";

//App is just a layout responsibility and no other responsibility should be given
//Since react-router only dynamically loads the component, we cant pass properties here
//Thats why App.js is a functional component by default
class App extends React.Component {
  //changing state of parent will cascade the rendering of child component
  state = {
    currencycode: "INR",
    theme: "light",
  };

  render() {
    let _currencycode = this.state.currencycode;
    // const currencycodes = ["INR","USD","EUR","GBP","CAD"];

    return (
      <BrowserRouter>
        <Header>
          {/* Enclosing theme and currency switcher in header */}
          <ThemeSwitch changeTheme={(theme) => this.setState({ theme })} />
          <Currency
            // currencycodes = {currencycodes}
            currencyChange={(currencycode) => {
              //child to parent prop exchange
              // console.log(currencycode);
              // this.state.currencycode = currencycode;//state object mutation
              this.setState({ currencycode: currencycode }); //maintains state immutability and automatic call of render()
            }}
          />
        </Header>
        {/* <PureComponentDemo />
          <Checkout />  */}
        {/* AppContext: Wrapping consumer base (column component will consume) with Provider tag */}
        <ThemeContext.Provider value={this.state.theme}>
          {/* parent to child prop exchange: */}
          {/* <ProductList currentCurrency={_currencycode} /> */}
          {/* router adds history, location and match props to it's immediate children */}
          <AppRouter />
        </ThemeContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
