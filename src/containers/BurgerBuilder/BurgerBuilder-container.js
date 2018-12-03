import { connect } from 'react-redux';

import BurgerBuilder from './BurgerBuilder';
import * as Actions from './actions';

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    price: state.totalPrice
  };
};

const mapDispatchTopProps = dispatch => {
  return {
    onIngredientAdded: ing => dispatch(Actions.add_ingridient(ing)),
    onIngedientRemoved: ing => dispatch(Actions.remove_ingridient(ing)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchTopProps,
)(BurgerBuilder);
