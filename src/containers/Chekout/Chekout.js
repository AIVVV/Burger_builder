import React from "react";
import { Route } from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummary";
import { ContactData } from "../../exports/components-exports";
import { StaticRoutes } from "../../common/ClientRoutes";
import Wrapper from "../../common/components/Wrapper";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: null,
      totalPrice: 0
    };
  }

  componentWillMount() {
    let query = new URLSearchParams(this.props.location.search);
    let ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({
      ...this.state,
      ingredients: ingredients,
      totalPrice: price
    });
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace(StaticRoutes.CHECKOUT_CONTACT_DATA);
  };

  render() {
    return (
      <Wrapper>
        <CheckoutSummary
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
          ingredients={this.state.ingredients}
        />
        <Route
          path={StaticRoutes.CHECKOUT_CONTACT_DATA}
          render={props => (
            <ContactData
              totalPrice={this.state.totalPrice}
              ingredients={this.state.ingredients}
              {...props}
            />
          )}
        />
      </Wrapper>
    );
  }
}

export default Checkout;
