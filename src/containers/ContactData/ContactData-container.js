import { connect } from 'react-redux';
import ContactData from './ContactData';

const mapStateToProps = state => {
  return {
    ingredients: state.burger.ingredients,
    price: state.burger.totalPrice,
  };
};

export default connect(mapStateToProps)(ContactData);
