import { connect } from 'react-redux';
import Checkout from './Checkout';

const mapStateToProps = state => {
  return {
    ingredients: state.burger.ingredients,
    price: state.burger.totalPrice,
    purchased: state.orders.purchased
  }
};

export default connect(mapStateToProps)(Checkout);