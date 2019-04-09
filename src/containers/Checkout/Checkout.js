import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary';
import { ContactData } from '../../exports/components-exports';
import {RoutePaths, StaticRoutes } from '../../common/ClientRoutes';
import Wrapper from '../../common/hoc/Wrapper';

class Checkout extends React.Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace(StaticRoutes.CHECKOUT_CONTACT_DATA);
  };

  render() {
    let summary = <Redirect to={StaticRoutes.HOME} />;

    if (this.props.ingredients) {
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to={StaticRoutes.HOME} />
      ) : null;

      summary = (
        <Wrapper>
          {purchasedRedirect}
          <CheckoutSummary
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
            ingredients={this.props.ingredients}
          />
          <Route
            path={RoutePaths.TO_CHECKOUT_CONTACT_DATA()}
            component={ContactData}
          />
        </Wrapper>
      );
    }

    return summary;
  }
}

export default Checkout;
