import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  SingUp,
  SingIn,
  SingOut,
  BurgerBuilder,
  Checkout,
  Orders,
} from '../../exports/components-exports';

import { StaticRoutes } from '../../common/ClientRoutes';

class AppRouter extends React.Component {

  routesHandler = () => {
    let routes = (
      <Switch>
        <Route path={StaticRoutes.SING_UP} component={SingUp} />
        <Route path={StaticRoutes.SING_IN} component={SingIn} />
        <Route exact path={StaticRoutes.HOME} component={BurgerBuilder} />
        <Redirect to={StaticRoutes.HOME}/>
      </Switch>
    );

    if(this.props.isAuthenticated) {
     routes = (
       <Switch>
         <Route path={StaticRoutes.SING_OUT} component={SingOut} />
         <Route path={StaticRoutes.CHECKOUT} component={Checkout} />
         <Route path={StaticRoutes.ORDERS} component={Orders} />
         <Route exact path={StaticRoutes.HOME} component={BurgerBuilder} />
         <Redirect to={StaticRoutes.HOME}/>
       </Switch>
     );
    }
    return routes;
  };

  render() {
    return this.routesHandler();
  }
}

export default AppRouter;
