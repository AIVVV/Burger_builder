import * as actionTypes from "./actionTypes";
import { localStorage } from "../../common/LocalStorage";

export const actionHelpersAuth = {
  singUpStart: () => {
    return {
      type: actionTypes.SINGUP_START,
    };
  },
  singUpSuccess: (token, userId) => {
    return {
      type: actionTypes.SINGUP_SUCCESS,
      payload: {
        token: token,
        userId: userId,
        registered: false,
      },
    };
  },
  singUpFail: error => {
    return {
      type: actionTypes.SINGUP_FAIL,
      payload: {
        error: error,
      },
    };
  },

  singInStart: () => {
    return {
      type: actionTypes.SINGIN_START,
    };
  },
  singInSuccess: (token, userId, registered) => {
    return {
      type: actionTypes.SINGIN_SUCCESS,
      payload: {
        token: token,
        userId: userId,
        registered: registered,
      },
    };
  },
  singInFail: error => {
    return {
      type: actionTypes.SINGIN_FAIL,
      payload: {
        error: error,
      },
    };
  },

  singOut: () => {
    localStorage.Remove('token');
    localStorage.Remove('expirationDate');
    localStorage.Remove('userId');
    localStorage.Remove('registered');
    return {
      type: actionTypes.SINGOUT,
    };
  },

  authRedirect: path => {
    return {
      type: actionTypes.AUTH_REDIRECT_PATH,
      payload: {
        path: path
      },
    };
  },
};

