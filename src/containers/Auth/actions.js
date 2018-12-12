import axios from 'axios';
import * as actionTypes from './actionTypes';

import { localStorage } from '../../common/LocalStorage';
import { settings, config } from '../../common/api/api-config';

export const helpers = {
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

export const singUp = (email, password) => {
  return dispatch => {
    const credentials = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    dispatch(helpers.singUpStart());
    axios
      .post(
        config.authURL(settings.protocol, settings.authSingUp, settings.apiKey),
        credentials,
      )
      .then(response => {
        console.log(response.data);
        dispatch(
          helpers.singUpSuccess(response.data.idToken, response.data.localId),
        );
      })
      .catch(error => {
        dispatch(helpers.singUpFail(error.response.data.error));
        console.log(error.response.data.error);
      });
  };
};

export const singIn = (email, password) => {
  return dispatch => {
    const credentials = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    dispatch(helpers.singInStart());
    axios
      .post(
        config.authURL(settings.protocol, settings.authSingIn, settings.apiKey),
        credentials,
      )
      .then(response => {
        let expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000,
        );
        localStorage.Save('token', response.data.idToken);
        localStorage.Save('expirationDate', expirationDate);
        localStorage.Save('userId', response.data.localId);
        dispatch(
          helpers.singInSuccess(
            response.data.idToken,
            response.data.localId,
            response.data.registered,
          ),
        );
        dispatch(singOutTimeout(response.data.expiresIn));
      })
      .catch(error => {
        dispatch(helpers.singInFail(error.response.data.error));
        console.log(error.response.data.error);
      });
  };
};

const singOutTimeout = expireTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(helpers.singOut());
    }, expireTime * 1000);
  };
};

//continue function
const authChekState = () => {};
