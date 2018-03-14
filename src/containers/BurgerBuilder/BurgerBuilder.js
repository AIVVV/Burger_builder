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
    purchasable: false,
  };

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(value => {
        return ingredients[value];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    const updatePurchasable = sum > 0 ? true : false;
    this.setState({ purchasable: updatePurchasable });
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
    const newPrice = Math.round((oldPrice + priceAdition) * 10) / 10;
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    this.updatePurchaseState(updateIngredients);
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
    const newPrice = Math.round((oldPrice - priceAdition) * 10) / 10;
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    this.updatePurchaseState(updateIngredients);
  };

  render() {
    let disableInfo = {
      ...this.state.ingredients,
    };

    for (let key in disableInfo) {
      disableInfo[key] <= 0
        ? (disableInfo[key] = true)
        : (disableInfo[key] = false);
    }
    return (
      <Wrapper>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngridient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          displayed={disableInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </Wrapper>
    );
  }
}

export default BurgerBuilder;
