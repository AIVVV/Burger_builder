import { connect } from 'react-redux';
import ContactData from './ContactData';

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    price: state.totalPrice,
  };
};

export default connect(mapStateToProps)(ContactData);
