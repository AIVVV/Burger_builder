import React from "react";
import Axios from "../../common/api/axios-orders";

import Burger from "../../components/Burger/Burger";
import Wrapper from "../../common/hoc/Wrapper";
import BuildControls from "../../components/Burger/BurgerBuildControls";
import Modal from "../../components/UI/Modals/Modal";
import OrderSummary from "../../components/Burger/OrderSummary";
import Spinner from "../../components/UI/Spinners/Spinner";
import withErrorHandler from "../../common/hoc/withErrorHandler";

import { RoutePaths } from "../../common/ClientRoutes";

class BurgerBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purchasing: false
    };
  }

  componentDidMount() {
    this.props.onInitIngredients();
    // Axios.get("/ingredients.json")
    //   .then(response => {
    //     this.setState({ ...this.state, ingredients: response.data });
    //   })
    //   .catch(() => {
    //     this.setState({ ...this.state, error: true });
    //   });
  }

  updatePurchaseState = ingredients => {
    const sum = Object.keys(ingredients)
      .map(value => {
        return ingredients[value];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCloseHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.history.push(RoutePaths.TO_CHECKOUT());
  };

  render() {
    let disableInfo = {
      ...this.props.ingredients
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

    let burger = this.props.error ? crashMessage : <Spinner />;

    if (this.props.ingredients) {
      burger = (
        <Wrapper>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            addIngridient={this.props.onIngredientAdded}
            removeIngredient={this.props.onIngedientRemoved}
            displayed={disableInfo}
            price={this.props.price}
            purchasable={this.updatePurchaseState(this.props.ingredients)}
            ordered={this.purchaseHandler}
          />
        </Wrapper>
      );
      orderSummary = (
        <OrderSummary
          price={this.props.price}
          ingredients={this.props.ingredients}
          purchaseCanceled={this.purchaseCloseHandler}
          purchaseContinue={this.purchaseContinueHandler}
        />
      );
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
