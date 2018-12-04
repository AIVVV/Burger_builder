import { connect } from 'react-redux';
import Checkout from './Chekout';

const mapStateToProps = state => {
  return {
    ingredients: state.burger.ingredients,
    price: state.burger.totalPrice
  }
};

export default connect(mapStateToProps)(Checkout);