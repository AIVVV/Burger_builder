import React from "react";
import { Switch, Route } from "react-router-dom";
import { BurgerBuilder, Checkout, Orders } from "../../components-exports";
import { StaticRoutes } from "../../common/ClientRoutes";

class AppRouter extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={StaticRoutes.CHECKOUT} component={Checkout} />
        <Route path={StaticRoutes.ORDERS} component={Orders}/>
        <Route exact path={StaticRoutes.HOME} component={BurgerBuilder} />
      </Switch>
    );
  }
}

export default AppRouter;
