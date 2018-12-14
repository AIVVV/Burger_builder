import actionTypes from './actionTypes';
import Axios from '../../common/api/axios-orders';

const helpers = {
  createOrders: ordersObject => {
    let ordersArray = Object.keys(ordersObject).map(order => {
      return {
        ...ordersObject[order],
        id: order,
      };
    });
    return ordersArray;
  },
  purchaseBurgerStart: () => {
    return {
      type: actionTypes.PURCHASE_BURGER_START,
    };
  },
  purchaseBurgerSuccess: (id, orderData) => {
    return {
      type: actionTypes.PURCHASE_BURGER_SUCCESS,
      payload: {
        id: id,
        order: orderData,
      },
    };
  },
  purchaseBurgerFail: error => {
    return {
      type: actionTypes.PURCHASE_BURGER_FAIL,
      payload: {
        error: error,
      },
    };
  },
  fetchOrdersStart: () => {
    return {
      type: actionTypes.FETCH_ORDERS_START,
    };
  },
  fetchOrdersSuccess: orders => {
    return {
      type: actionTypes.FETCH_ORDERS_SUCCESS,
      payload: {
        orders: orders,
      },
    };
  },
  fetchOrdersFail: error => {
    return {
      type: actionTypes.FETCH_ORDERS_FAIL,
      payload: {
        error: error,
      },
    };
  },
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

export const purchaseBurger = (orderData, token) => {
  return dispatch => {
    dispatch(helpers.purchaseBurgerStart());
    Axios.post('orders.json?auth=' + token, orderData)
      .then(response => {
        dispatch(helpers.purchaseBurgerSuccess(response.data.name, orderData));
      })
      .catch(error => {
        dispatch(helpers.purchaseBurgerFail(error.message));
      });
  };
};

export const fetchOrders = (token, userId) => {
  return (dispatch) => {
    dispatch(helpers.fetchOrdersStart());
    let params = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    Axios.get('/orders.json' + params)
      .then(response => {
        let fetchedOrders = helpers.createOrders(response.data);
        dispatch(helpers.fetchOrdersSuccess(fetchedOrders));
      })
      .catch(error => {
        dispatch(helpers.fetchOrdersFail(error));
      });
  };
};
