import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import Wrapper from '../../common/Wrapper';
import BuildControls from '../../components/Burger/BurgerBuildControls';

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: {
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 2,
      },
    };
  }

  addIngredientHandler = () => {

  };

  removeIngredientHandler = () => {

  };

  render() {
    return (
      <Wrapper>
        <Burger ingredients={this.state.ingredient} />
        <BuildControls />
      </Wrapper>
    );
  }
}

export default BurgerBuilder;
