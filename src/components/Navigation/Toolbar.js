import React from 'react';

import Logo from '../../common/components/Logo';
import Navigation from './Navigation';
import DrawerToggle from '../SideDrawer/DrawerToggle';

const toolbar = props => (
  <header className="Toolbar">
    <DrawerToggle  clicked={props.drawerToggleClicked}/>
    <Logo height="80%" alt="Toolbar logo image"/>
    <Navigation class="DesktopOnly" isAuthenticated={props.isAuth}/>
  </header>
);

export default toolbar;
