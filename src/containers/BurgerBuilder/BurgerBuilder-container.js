import { connect } from 'react-redux';

import BurgerBuilder from './BurgerBuilder';
import * as Actions from './actions';

const mapStateToProps = state => {
  return {
    ingredients: state.burger.ingredients,
    price: state.burger.totalPrice
  };
};

const mapDispatchTopProps = dispatch => {
  return {
    onIngredientAdded: ing => dispatch(Actions.addIngridient(ing)),
    onIngedientRemoved: ing => dispatch(Actions.removeIngridient(ing)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchTopProps,
)(BurgerBuilder);
