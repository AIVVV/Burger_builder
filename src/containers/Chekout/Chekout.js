import React from "react";
import { Route } from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummary";
import { ContactData } from "../../exports/components-exports";
import { StaticRoutes } from "../../common/ClientRoutes";
import Wrapper from "../../common/components/Wrapper";

class Checkout extends React.Component {

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
          ingredients={this.props.ingredients}
        />
        <Route
          path={StaticRoutes.CHECKOUT_CONTACT_DATA}
          component={ContactData}
        />
      </Wrapper>
    );
  }
}

export default Checkout;
