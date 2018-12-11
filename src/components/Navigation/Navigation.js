import React from "react";
import NavigationItem from "./NavigationItem";
import { RoutePaths } from "../../common/ClientRoutes";

const navigation = props => {
  let burgerBuilder = (
    <NavigationItem link={RoutePaths.TO_HOME()} exact>
      Burger Builder
    </NavigationItem>
  );

  let orders = props.isAuthenticated ? (
    <NavigationItem link={RoutePaths.TO_ORDERS()}>Orders</NavigationItem>
  ) : null;

  let singup = props.isAuthenticated ? null : (
    <NavigationItem link={RoutePaths.TO_SING_UP()}>Sing Up</NavigationItem>
  );

  let singin = props.isAuthenticated ? null : (
    <NavigationItem link={RoutePaths.TO_SING_IN()}>Sing In</NavigationItem>
  );

  let singout = props.isAuthenticated ? (
    <NavigationItem link={RoutePaths.TO_SING_OUT()}>Sing out</NavigationItem>
  ) : null;

  return (
    <nav className={props.class}>
      <ul className="Navigation">
        {burgerBuilder}
        {orders}
        {singup}
        {singin}
        {singout}
      </ul>
    </nav>
  );
};

export default navigation;
