import PureComponentDemo from "./PureComponentDemo";
import ProductList from "./components/container/ProductList";
import Checkout from "./components/container/Checkout";


//centralized navigation and routing
export const ROUTES = [
    { path: "/", component: PureComponentDemo, exact: true, menuText: "Home" },
    { path: "/products", component: ProductList, exact: false, menuText: "Products" },
    { path: "/checkout", component: Checkout, exact: false, menuText: "Checkout" },
  ];