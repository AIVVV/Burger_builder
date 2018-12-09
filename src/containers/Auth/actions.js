import * as actionTypes from "./actionTypes";
import axios from 'axios';

import {settings, config} from '../../common/api/api-config';

const helpers = Object.freeze({
  singUpStart: () => {
    return {
      type: actionTypes.SINGUP_START
    };
  },
  singUpSuccess: data => {
    return {
      type: actionTypes.SINGUP_SUCCESS,
      payload: {
        loginData: data
      }
    };
  },
  singUpFail: error => {
    return {
      type: actionTypes.SINGUP_FAIL,
      payload: {
        error: error
      }
    };
  },

  singInStart: () => {
    return {
      type: actionTypes.SINGIN_START
    };
  },
  singInSuccess: data => {
    return {
      type: actionTypes.SINGIN_SUCCESS,
      payload: {
        loginData: data
      }
    };
  },
  singInFail: error => {
    return {
      type: actionTypes.SINGIN_FAIL,
      payload: {
        error: error
      }
    };
  }
});

export const singUp = (email, password) => {
  return dispatch => {
    const credentials = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    dispatch(helpers.singUpStart());
    axios.post(config.authURL(settings.protocol,settings.authSingUp, settings.apiKey), credentials)
      .then(response => {
        console.log(response);
        dispatch(helpers.singUpSuccess(response.data));
      })
      .catch(error => {
        dispatch(helpers.singUpFail(error));
        console.log(error);
      });
  };
};

export const singIn = (email, password) => {
  return dispatch => {
    const credentials = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    dispatch(helpers.singInStart());
    axios.post(config.authURL(settings.protocol,settings.authSingIn, settings.apiKey), credentials)
      .then(response => {
        console.log(response);
        dispatch(helpers.singInSuccess(response.data));
      })
      .catch(error => {
        dispatch(helpers.singInFail(error));
        console.log(error);
      });
  };
};
