// srote config file for redux store
// by convention, we call it index.js. It could be any name
import { createStore } from "redux";
import currencyReducer from "./reducers/currency-reducer";

const appStore = createStore(
  currencyReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default appStore;
