import { connect } from 'react-redux';

import BurgerBuilder from './BurgerBuilder';
import * as actionsBurger from './actions';
import * as actionsOrders from '../Orders/actions';

const mapStateToProps = state => {
  return {
    ingredients: state.burger.ingredients,
    price: state.burger.totalPrice,
    error: state.burger.error,
    isAuthenticated: state.auth.registered
  };
};

const mapDispatchTopProps = dispatch => {
  return {
    onIngredientAdded: ing => dispatch(actionsBurger.addIngridient(ing)),
    onIngedientRemoved: ing => dispatch(actionsBurger.removeIngridient(ing)),
    onInitIngredients: () => dispatch(actionsBurger.initIngredients()),
    onPurchaseInit: () => dispatch(actionsOrders.purchaseInit())
  };
};

export default connect(mapStateToProps, mapDispatchTopProps)(BurgerBuilder);
