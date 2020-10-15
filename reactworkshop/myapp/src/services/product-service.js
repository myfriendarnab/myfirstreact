//code for handling business logic of ProductList container
import axios from "axios";

function getProducts(params) {
  const endpoint =
    "https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json";
  return axios.get(endpoint);
}

const ProductService = { getProducts }; //wrap in a object before exporting
export default ProductService;
