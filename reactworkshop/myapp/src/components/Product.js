import React from "react";
//component to display product information
class Product extends React.Component {
  //no keyword in class variables
  pData = {
    productId: 1000,
    productName: "red t-shirt for men",
    productPrice: 129.99,
    productStock: true,
    productImage: "https://5.imimg.com/data5/QF/AP/MY-11168283/one-ride-2018-t-shirt-500x500.png", //online resource
  };
  render() {
    return (
      <div id="product">
        <img src={this.pData.productImage} alt=""/>
        <h4>{this.pData.productName}</h4>
        <h5>INR {this.pData.productPrice}</h5>
        {/* <button>Add to cart</button> */}
      </div>
    );
  }
}

export default Product;
