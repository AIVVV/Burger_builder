import * as actionTypes from './actionТypes';

export const addIngridient = ingridientType => {
  return {
    type: actionTypes.ADD_INGRIDIENT,
    payload: {
      ingridient: ingridientType
    }
  }
};

export const removeIngridient = ingridientType => {
  return {
    type: actionTypes.REMOVE_INGRIDIENT,
    payload: {
      ingridient: ingridientType
    }
  }
};