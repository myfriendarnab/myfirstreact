import React from "react";
import { ThemeContext } from "../context";
import Column from "./Column";
import ImageWithFallback from "./ImageWithFallback";

//component to display product information
class Product extends React.Component {
  //no keyword in class variables
  // pData = {
  //   productId: 1000,
  //   productName: "red t-shirt for men",
  //   productPrice: 129.99,
  //   productStock: true,
  //   productImage: "https://5.imimg.com/data5/QF/AP/MY-11168283/one-ride-2018-t-shirt-500x500.png", //online resource
  // };

  //AppContext: Consuming it in Class component - part-1
  static contextType = ThemeContext;

  renderStock(stock, wishlist) {
    if (stock) {
      return (
        <button class={this.buttonStyle} onClick={() => this.props.btnClick()}>
          Add to {this.renderWishlist(wishlist)}
        </button>
      );
    }
    return (
      <div>
        <p>Out of Stock!</p>
        <button class={this.buttonStyle}> Add to Wishlist </button>
      </div>
    );
  }

  renderWishlist(wishlist) {
    if (!wishlist) {
      return "Cart";
    }
    return "Wishlist";
  }

  render() {
    //AppContext: Consuming it in Class component - part-2
    // console.log(this.context);
    this.buttonStyle =
      this.context === "dark" ? "btn btn-dark" : "btn btn-light";

    const { pData, currencyCode, wishlist } = this.props; //literal destructing
    return (
      <Column size={4}>
        {/* <img src={pData.productImage} height='200' width='200' alt="" /> */}
        <ImageWithFallback source={pData.productImage} />
        <h4>{pData.productName}</h4>
        <h5>
          {currencyCode} {pData.productPrice}
        </h5>
        {this.renderStock(pData.productStock, wishlist)}
      </Column>
    );
  }
}

export default Product;
