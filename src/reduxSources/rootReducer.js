import * as actionsTypes from '../containers/BurgerBuilder/action-types';

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    meat: 0,
    cheese: 0,
  },

  totalPrice: 4,
};

const INGREDINTS_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.6,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_INGRIDIENT: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.ingridient]:
            state.ingredients[action.payload.ingridient] + 1,
        },
        totalPrice:
          Math.round((state.totalPrice + INGREDINTS_PRICES[action.payload.ingridient]) * 10) / 10

      };
    }
    case actionsTypes.REMOVE_INGRIDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.ingridient]:
            state.ingredients[action.payload.ingridient] - 1,
        },
        totalPrice:
          Math.round((state.totalPrice - INGREDINTS_PRICES[action.payload.ingridient]) * 10) / 10
      };
    default:
      return state;
  }
};
