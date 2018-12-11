import actionTypes from "./actionTypes";
import Axios from "../../common/api/axios-orders";

const helpers = {
  createOrders: ordersObject => {
    let ordersArray = [];
    for (let key in ordersObject) {
      ordersArray.push({
        ...ordersObject[key],
        id: key
      });
    }
    return ordersArray;
  },
  purchaseBurgerStart: () => {
    return {
      type: actionTypes.PURCHASE_BURGER_START
    };
  },
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
  fetchOrdersStart: () => {
    return {
      type: actionTypes.FETCH_ORDERS_START
    };
  },
  fetchOrdersSuccess: orders => {
    return {
      type: actionTypes.FETCH_ORDERS_SUCCESS,
      payload: {
        orders: orders
      }
    };
  },
  fetchOrdersFail: error => {
    return {
      type: actionTypes.FETCH_ORDERS_FAIL,
      payload: {
        error: error
      }
    };
  }
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const purchaseBurger = (orderData) => {
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

export const fetchOrders = () => {
  return dispatch => {
    dispatch(helpers.fetchOrdersStart());
    Axios.get("/orders.json")
      .then(response => {
        let fetchedOrders = helpers.createOrders(response.data);
        dispatch(helpers.fetchOrdersSuccess(fetchedOrders));
      })
      .catch(error => {
        dispatch(helpers.fetchOrdersFail(error));
      });
  };
};
