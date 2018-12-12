import * as actionTypes from './actionTypes';

const initalState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  registered: false,
  authRedirectPath: '/',
};

const authStart = (state, action) => {
  return {
    ...state,
    error: null,
    loading: true,
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.payload.token,
    userId: action.payload.userId,
    loading: false,
    error: null,
    registered: action.payload.registered,
  };
};

const authFail = (state, action) => {
  return {
    ...state,
    error: action.payload.error,
    loading: false,
  };
};

const authSingOut = (state, action) => {
  return {
    ...state,
    token: null,
    userId: null,
    registered: false,
    error: null,
  };
};

const authRedirectPath = (state, action) => {
  return {
    ...state,
    authRedirectPath: action.payload.path
  };
};

export const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.SINGUP_START:
      return authStart(state, action);
    case actionTypes.SINGUP_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.SINGUP_FAIL:
      return authFail(state, action);
    case actionTypes.SINGIN_START:
      return authStart(state, action);
    case actionTypes.SINGIN_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.SINGIN_FAIL:
      return authFail(state, action);
    case actionTypes.SINGOUT:
      return authSingOut(state, action);
    case actionTypes.AUTH_REDIRECT_PATH:
      return authRedirectPath(state, action);
    default:
      return state;
  }
};
