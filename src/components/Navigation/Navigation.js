import React from "react";
import NavigationItem from "./NavigationItem";
import { StaticRoutes } from "../../common/ClientRoutes";

const navigationItem = () => (
  <ul className="Navigation">
    <NavigationItem link={StaticRoutes.HOME} exact>
      Burger Builder
    </NavigationItem>
    <NavigationItem link={StaticRoutes.ORDERS}>Orders</NavigationItem>
  </ul>
);

export default navigationItem;
