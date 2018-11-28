import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Buttons/Button';

const checkoutSummary = props => {
    return(
        <div className="CheckoutSummary">
            <h1>Your Burger!</h1>
            <div className="BurgerWrapper">
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button clicked={props.checkoutCancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.checkoutContinued} btnType="Success">CONTINUE</Button>
        </div>
    );
};

export default checkoutSummary;