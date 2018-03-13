import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import Wrapper from '../../common/Wrapper';
import BuildControls from '../../components/Burger/BurgerBuildControls';

const INGREDINTS_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.6,
};

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = updateCount;

    const priceAdition = INGREDINTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdition;
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return null;
    }
    const updateCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = updateCount;

    const priceAdition = INGREDINTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAdition;
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
  };

  render() {
    return (
      <Wrapper>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngridient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
        />
      </Wrapper>
    );
  }
}

export default BurgerBuilder;
