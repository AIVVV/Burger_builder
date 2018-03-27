import React from 'react';
import NavigationItem from './NavigationItem';

const navigationItem = () => (
  <ul className="Navigation">
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default navigationItem;
