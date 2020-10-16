import React from "react";
import Product from "../Product";
import ProductService from "../../services/product-service";
import { connect } from "react-redux"; //connect(how to connect/mappingFunction, what to connect/component)



//list the porducts dynamically
//containers are smart components whereas directly under component dir are dumb components

class ProductList extends React.Component {
  // pList = [
  //   {
  //     productId: 1000,
  //     productName: "red t-shirt for men",
  //     productPrice: 129.99,
  //     productStock: true,
  //     productImage:
  //       "https://5.imimg.com/data5/QF/AP/MY-11168283/one-ride-2018-t-shirt-500x500.png", //online resource
  //   },
  //   {
  //     productId: 1001,
  //     productName: "white t-shirt for men",
  //     productPrice: 129.99,
  //     productStock: true,
  //     productImage:
  //       "https://5.imimg.com/data5/QY/NJ/MY-25637985/white-plain-t-shirt-500x500.jpg", //online resource
  //   },
  //   {
  //     productId: 1002,
  //     productName: "blue t-shirt for men",
  //     productPrice: 129.99,
  //     productStock: false,
  //     productImage:
  //       "https://i.pinimg.com/564x/fe/48/61/fe4861c99244af2c8d29be79a1c2e642.jpg", //online resource
  //   },
  // ];
  
  state = { pList: [] }; //ALWAYS initialize the state

  //react lifecycle events
  //will be called only component onload() for first time
  componentDidMount() {
    ProductService.getProducts()
      .then((resp) => {
        console.log(resp.data);
        this.setState({ pList: resp.data });
      })
      .catch((err) => console.log("ERROR", err));
  }

  render() {
    //const { currentCurrency } = this.props;
    return (
      <div id="ProductList" className='row'>
        {this.state.pList.map(
          (p, i) => (
            //unique key is required to identify each element of a list for effective virtual DOM rendering
            <Product
              pData={p}
              wishlist={i % 2 === 0}
              currencyCode={this.props.currentCurrency}
              key={p.productId}
              btnClick={()=>{
                //add product to cart
                //redirect to cart using history prop automatically added by router
                if (i%2===0) { 
                  this.props.history.push("/checkout");
                }
                else{
                  this.props.history.push("/wishlist");
                }

              }}
            />
          ),
          this
        )}
      </div>
    );
  }
}

//all the store data in the component comes as a prop 
const mapStoreDataToProp = (storeData)=>{
  return ({
    //prop: store data
    currentCurrency:storeData
  });
};

//connecting currentCurrency prop to store data AND THEN exporting ProductList
export default connect(mapStoreDataToProp)(ProductList);
