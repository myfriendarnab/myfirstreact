import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Currency from "./components/Currency";
import PureComponentDemo from "./PureComponentDemo";
import ProductList from "./components/container/ProductList";
import Checkout from "./components/container/Checkout";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeContext } from "./context";

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
      <div className="App">
        <ThemeSwitch changeTheme={(theme) => this.setState({ theme })} />
        {/* <PureComponentDemo />*/}
        {/* <Checkout />  */}
        <Currency
          // currencycodes = {currencycodes}
          currencyChange={(currencycode) => {
            //child to parent prop exchange
            // console.log(currencycode);
            // this.state.currencycode = currencycode;//state object mutation
            this.setState({ currencycode: currencycode }); //maintains state immutability and automatic call of render()
          }}
        />
        {/* AppContext: Wrapping consumer base (column component will consume) with Provider tag */}
        <ThemeContext.Provider value={this.state.theme}>
          {/* parent to child prop exchange: */}
          <ProductList currentCurrency={_currencycode} />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
