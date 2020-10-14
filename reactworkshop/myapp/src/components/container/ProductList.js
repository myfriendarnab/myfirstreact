import React from "react";
import Product from "../Product";

//list the porducts dynamically
//containers are smart components whereas directly under component dir are dumb components

class ProductList extends React.Component {
  pList = [
    {
      productId: 1000,
      productName: "red t-shirt for men",
      productPrice: 129.99,
      productStock: true,
      productImage:
        "https://5.imimg.com/data5/QF/AP/MY-11168283/one-ride-2018-t-shirt-500x500.png", //online resource
    },
    {
      productId: 1001,
      productName: "white t-shirt for men",
      productPrice: 129.99,
      productStock: true,
      productImage:
        "https://5.imimg.com/data5/QY/NJ/MY-25637985/white-plain-t-shirt-500x500.jpg", //online resource
    },
    {
      productId: 1002,
      productName: "blue t-shirt for men",
      productPrice: 129.99,
      productStock: false,
      productImage:
        "https://i.pinimg.com/564x/fe/48/61/fe4861c99244af2c8d29be79a1c2e642.jpg", //online resource
    },
  ];

  render() {
    return (
      <div id="ProductList">
        {this.pList.map(
          (p, i) => (
            //unique key is required to identify each element of a list for effective virtual DOM rendering
            <Product pData={p} wishlist={i % 2 === 0} key={p.productId} />
          ),
          this
        )}
      </div>
    );
  }
}

export default ProductList;
