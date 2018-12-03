import { connect } from 'react-redux';
import Checkout from './Chekout';

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    price: state.totalPrice
  }
};

export default connect(mapStateToProps)(Checkout);