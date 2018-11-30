import React from "react";

import Burger from "../../components/Burger/Burger";
import Wrapper from "../../common/hoc/Wrapper";
import BuildControls from "../../components/Burger/BurgerBuildControls";
import Modal from "../../components/UI/Modals/Modal";
import OrderSummary from "../../components/Burger/OrderSummary";
import Spinner from "../../components/UI/Spinners/Spinner";
import withErrorHandler from "../../common/hoc/withErrorHandler";
import Axios from "../../common/api/axios-orders";
import { RoutePaths } from "../../common/ClientRoutes";

const INGREDINTS_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.6
};

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: null,
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      loading: false,
      error: false
    };
  }

  componentDidMount() {
    Axios.get("/ingredients.json")
      .then(response => {
        this.setState({ ...this.state, ingredients: response.data });
      })
      .catch(() => {
        this.setState({ ...this.state, error: true });
      });
  }

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
      ...this.state.ingredients
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
      ...this.state.ingredients
    };
    updateIngredients[type] = updateCount;

    const priceAdition = INGREDINTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = Math.round((oldPrice - priceAdition) * 10) / 10;
    this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    this.updatePurchaseState(updateIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCloseHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    let queryParams = [];
    for (let ingredient in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(ingredient) +
          "=" +
          encodeURIComponent(this.state.ingredients[ingredient])
      );
    }
    queryParams.push("price=" + this.state.totalPrice);
    let queryString = queryParams.join("&");

    this.props.history.push({
      pathname: RoutePaths.TO_CHECKOUT(),
      search: "&" + queryString
    });
  };

  render() {
    let disableInfo = {
      ...this.state.ingredients
    };

    for (let key in disableInfo) {
      disableInfo[key] <= 0
        ? (disableInfo[key] = true)
        : (disableInfo[key] = false);
    }

    const crashMessage = (
      <p className="crash-message">
        Something went wrong. Ingredints can't be loaded.
      </p>
    );

    let orderSummary = null;

    let burger = this.state.error ? crashMessage : <Spinner />;

    if (this.state.ingredients) {
      burger = (
        <Wrapper>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            addIngridient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            displayed={disableInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
          />
        </Wrapper>
      );
      orderSummary = (
        <OrderSummary
          price={this.state.totalPrice}
          ingredients={this.state.ingredients}
          purchaseCanceled={this.purchaseCloseHandler}
          purchaseContinue={this.purchaseContinueHandler}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Wrapper>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCloseHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Wrapper>
    );
  }
}

export default withErrorHandler(BurgerBuilder, Axios);
