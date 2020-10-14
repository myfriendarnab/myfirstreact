import React from "react";
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

  renderStock(stock, wishlist) {
   if (stock) {
   return (<button>Add to {this.renderWishlist(wishlist)}</button>);
   }
   return (
   <div>
     <p>Out of Stock!</p>
      <button> Add to Wishlist </button>
   </div>);
 }

 renderWishlist(wishlist){
   if (!wishlist) {
     return "Cart";
   }
   return "Wishlist";
 }

  render() {
    const { pData, wishlist } = this.props; //literal destructing
    return (
      <div id="product">
        <img src={pData.productImage} alt="" />
        <h4>{pData.productName}</h4>
        <h5>INR {pData.productPrice}</h5>
        {this.renderStock(pData.productStock, wishlist)}
      </div>
    );
  }
}

export default Product;
