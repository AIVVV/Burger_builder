import * as actionTypes from "./actionТypes";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false
};

const INGREDIENTS_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.6
};

const addIngredient = (state, action) => {
  return {
    ...state,
    ingredients: {
      ...state.ingredients,
      [action.payload.ingredient]:
        state.ingredients[action.payload.ingredient] + 1
    },
    totalPrice:
      Math.round(
        (state.totalPrice + INGREDIENTS_PRICES[action.payload.ingredient]) * 10
      ) / 10,
    building: true
  };
};

const removeIngredient = (state, action) => {
  return {
    ...state,
    ingredients: {
      ...state.ingredients,
      [action.payload.ingredient]:
        state.ingredients[action.payload.ingredient] - 1
    },
    totalPrice:
      Math.round(
        (state.totalPrice - INGREDIENTS_PRICES[action.payload.ingredient]) * 10
      ) / 10,
    building: true
  };
};

const setIngredients = (state, action) => {
  return {
    ...state,
    ingredients: {
      bacon: action.payload.ingredients.bacon,
      cheese: action.payload.ingredients.cheese,
      meat: action.payload.ingredients.meat,
      salad: action.payload.ingredients.salad
    },
    error: false,
    totalPrice: 4,
    building: false
  };
};

const fetchIngredientsFaild = (state, action) => {
  return {
    ...state,
    error: true
  };
};

export const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILD:
      return fetchIngredientsFaild(state, action);
    default:
      return state;
  }
};
