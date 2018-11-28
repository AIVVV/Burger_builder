import React from 'react';
import Wrapper from '../../common/hoc/Wrapper';
import Button from '../UI/Buttons/Button';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingKey => {
    return (
      <li key={ingKey}>
        <span>{ingKey}</span>: {props.ingredients[ingKey]}
      </li>
    );
  });

  return (
    <Wrapper>
      <h3>Your order:</h3>
      <p>You included the following ingredients:</p>
      <ul className="order-summary-list">{ingredientSummary}</ul>
      <p>
        <strong>Total Price:</strong>
        {props.price}
      </p>
      <p>Continue to check out?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Wrapper>
  );
};

export default orderSummary;
