import React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import { ROUTES } from "./routes";

//React router demo
//declaring pages of application

function AppRouter(props) {
  return (
    //   Switch acts as switch case statement in cascading order
    <Switch>
      {ROUTES.map(
        (r, i) => (
          <Route
            key={i}
            path={r.path}
            component={r.component}
            exact={r.exact}
          />
        ),
        this
      )}
      {/* <Route path="/" component={PureComponentDemo} exact={true} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/products" component={ProductList} /> */}
      {/* <Route path="/wishlist" component={Wishlist} /> */}
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default AppRouter;
