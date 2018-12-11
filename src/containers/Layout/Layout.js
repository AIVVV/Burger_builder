import React from 'react';

import Wrapper from '../../common/hoc/Wrapper';
import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false,
    };
  }

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !this.state.showSideDrawer };
    });
  };

  render() {
    return (
      <Wrapper>
        <Toolbar
          isAuth={this.props.isAuthenticate}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <SideDrawer
          isAuth={this.props.isAuthenticate}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <main className="Content">{this.props.children}</main>
      </Wrapper>
    );
  }
}

export default Layout;
