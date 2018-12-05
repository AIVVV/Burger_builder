import * as actionTypes from './actionТypes';
import Axios from '../../common/api/axios-orders';

export const addIngridient = ingridientType => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    payload: {
      ingredient: ingridientType,
    },
  };
};

export const removeIngridient = ingridientType => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    payload: {
      ingredient: ingridientType,
    },
  };
};

export const initIngredients = () => {
  return dispatch => {
    Axios.get('/ingredients.json')
      .then(response => {
        dispatch(helperActions.setIngredients(response.data));
      })
      .catch(() => {
        dispatch(helperActions.fetchIngredientsFaild());
      });
  };
};

// Helper action creators for generate actions //
const helperActions = Object.freeze({
  setIngredients: ingredients => {
    return {
      type: actionTypes.SET_INGREDIENTS,
      payload: {
        ingredients: ingredients
      },
    };
  },
  fetchIngredientsFaild: () => {
    return {
      type: actionTypes.FETCH_INGREDIENTS_FAILD
    };
  },
});
