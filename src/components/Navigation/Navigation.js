import React from "react";
import NavigationItem from "./NavigationItem";
import { RoutePaths } from "../../common/ClientRoutes";

const navigationItem = () => (
  <nav className="DesktopOnly">
    <ul className="Navigation">
      <NavigationItem link={RoutePaths.TO_HOME()} exact>Burger Builder</NavigationItem>
      <NavigationItem link={RoutePaths.TO_ORDERS()}>Orders</NavigationItem>
      <NavigationItem link={RoutePaths.TO_SING_UP()}>Sing Up</NavigationItem>
      <NavigationItem link={RoutePaths.TO_SING_IN()}>Sing In</NavigationItem>
    </ul>
  </nav>
);

export default navigationItem;
