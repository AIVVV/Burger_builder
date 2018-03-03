import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import Wrapper from '../../common/Wrapper';

class BurgerBuilder extends React.Component {
  render() {
    return (
      <Wrapper>
        <Burger />
        <div>Build Controls</div>
      </Wrapper>
    );
  }
}

export default BurgerBuilder;
