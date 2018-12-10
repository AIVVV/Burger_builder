import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  SingUp,
  SingIn,
  BurgerBuilder,
  Checkout,
  Orders
} from "../../exports/components-exports";

import { StaticRoutes } from "../../common/ClientRoutes";

class AppRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={StaticRoutes.SING_UP} component={SingUp} />
        <Route path={StaticRoutes.SING_IN} component={SingIn} />
        <Route path={StaticRoutes.CHECKOUT} component={Checkout} />
        <Route path={StaticRoutes.ORDERS} component={Orders} />
        <Route exact path={StaticRoutes.HOME} component={BurgerBuilder} />
      </Switch>
    );
  }
}

export default AppRouter;
