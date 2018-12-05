import actionTypes from "./actionTypes";
import Axios from "../../common/api/axios-orders";

const helpers = Object.freeze({
  purchaseBurgerSuccess: (id, orderData) => {
    return {
      type: actionTypes.PURCHASE_BURGER_SUCCESS,
      payload: {
        id: id,
        order: orderData
      }
    };
  },
  purchaseBurgerFail: error => {
    return {
      type: actionTypes.PURCHASE_BURGER_FAIL,
      payload: {
        error: error
      }
    };
  },
  purchaseBurgerStart: () => {
    return {
      type: actionTypes.PURCHASE_BURGER_START
    };
  }
});

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const purchaseBurger = orderData => {
  return dispatch => {
    dispatch(helpers.purchaseBurgerStart());
    Axios.post("orders.json", orderData)
      .then(response => {
        dispatch(helpers.purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch(error => {
        dispatch(helpers.purchaseBurgerFail(error.message));
      });
  };
};
