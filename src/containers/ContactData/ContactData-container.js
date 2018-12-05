import { connect } from "react-redux";
import ContactData from "./ContactData";
import * as actions from "../Orders/actions";

const mapStateToProps = state => {
  return {
    ingredients: state.burger.ingredients,
    price: state.burger.totalPrice,
    loading: state.orders.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onOrderBurger: orderData => dispatch(actions.purchaseBurger(orderData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);
