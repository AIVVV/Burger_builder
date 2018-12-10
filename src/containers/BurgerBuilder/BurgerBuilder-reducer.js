import * as actionTypes from './actionТypes';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
};

const INGREDIENTS_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.6,
};

export const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.ingredient]:
            state.ingredients[action.payload.ingredient] + 1,
        },
        totalPrice:
          Math.round(
            (state.totalPrice + INGREDIENTS_PRICES[action.payload.ingredient]) *
              10,
          ) / 10,
      };
    }
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.ingredient]:
            state.ingredients[action.payload.ingredient] - 1,
        },
        totalPrice:
          Math.round(
            (state.totalPrice - INGREDIENTS_PRICES[action.payload.ingredient]) *
              10,
          ) / 10,
      };
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          bacon: action.payload.ingredients.bacon,
          cheese: action.payload.ingredients.cheese,
          meat: action.payload.ingredients.meat,
          salad: action.payload.ingredients.salad,
        },
        error: false,
        totalPrice: 4,
      };
    case actionTypes.FETCH_INGREDIENTS_FAILD:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
