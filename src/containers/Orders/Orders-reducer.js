import actionTypes from "./actionTypes";

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const objectCreator = (id, object) => {
  return {
    ...object,
    id: id
  };
};

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return {
        ...state,
        purchased: false
      };
    case actionTypes.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(
          objectCreator(action.payload.id, action.payload.order)
        )
      };
    case actionTypes.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
