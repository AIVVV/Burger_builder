import * as actionTypes from "./actionTypes";
import axios from "axios";
import { settings, config } from "../../common/api/api-config";

const helpers = Object.freeze({
  singUpStart: () => {
    return {
      type: actionTypes.SINGUP_START
    };
  },
  singUpSuccess: (token, userId) => {
    return {
      type: actionTypes.SINGUP_SUCCESS,
      payload: {
        token: token,
        userId: userId,
        registered: false
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
  singInSuccess: (token, userId, registered) => {
    return {
      type: actionTypes.SINGIN_SUCCESS,
      payload: {
        token: token,
        userId: userId,
        registered: registered
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
  },

  singOut: () => {
    return {
      type: actionTypes.SINGOUT
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
    axios
      .post(
        config.authURL(settings.protocol, settings.authSingUp, settings.apiKey),
        credentials
      )
      .then(response => {
        console.log(response.data);
        dispatch(
          helpers.singUpSuccess(response.data.idToken, response.data.localId)
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
      returnSecureToken: true
    };

    dispatch(helpers.singInStart());
    axios
      .post(
        config.authURL(settings.protocol, settings.authSingIn, settings.apiKey),
        credentials
      )
      .then(response => {
        console.log(response);
        dispatch(
          helpers.singInSuccess(
            response.data.idToken,
            response.data.localId,
            response.data.registered
          )
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
