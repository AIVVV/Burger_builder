import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {
  SingUp,
  SingIn,
  SingOut,
  BurgerBuilder,
  Checkout,
  Orders
} from "../../exports/components-exports";

import { StaticRoutes } from "../../common/ClientRoutes";
import { asyncComponent } from "../../common/hoc/asyncComponent";

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ordersPath: "../Orders/Orders-container",
      checkoutPath: "../Checkout/Checkout-container"
    };
  }

  lazyLoadingHandler = importComponent => {
    return asyncComponent(() =>
      import(importComponent).then(module => module.default)
    );
  };

  routesHandler = ({ ordersPath, checkoutPath }) => {
    let routes = (
      <Switch>
        <Route path={StaticRoutes.SING_UP} component={SingUp} />
        <Route path={StaticRoutes.SING_IN} component={SingIn} />
        <Route path={StaticRoutes.SING_OUT} component={SingOut} />
        <Route exact path={StaticRoutes.HOME} component={BurgerBuilder} />
        <Redirect to={StaticRoutes.HOME} />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path={StaticRoutes.SING_UP} component={SingUp} />
          <Route path={StaticRoutes.SING_IN} component={SingIn} />
          <Route path={StaticRoutes.SING_OUT} component={SingOut} />
          <Route path={StaticRoutes.CHECKOUT} component={Checkout} />
          <Route path={StaticRoutes.ORDERS} component={Orders} />
          <Route exact path={StaticRoutes.HOME} component={BurgerBuilder} />
          <Redirect to={StaticRoutes.HOME} />
        </Switch>
      );
    }
    return routes;
  };

  render() {
    const { ordersPath, checkoutPath } = this.state;
    return this.routesHandler({ ordersPath, checkoutPath });
  }
}

export default AppRouter;
