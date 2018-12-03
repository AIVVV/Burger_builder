import * as actionTypes from './action-types';

// Action creator for add ingridient
export const add_ingridient = ingridientType => {
  return {
    type: actionTypes.ADD_INGRIDIENT,
    payload: {
      ingridient: ingridientType
    }
  }
};

// Action creator for remove ingridient
export const remove_ingridient = ingridientType => {
  return {
    type: actionTypes.REMOVE_INGRIDIENT,
    payload: {
      ingridient: ingridientType
    }
  }
};