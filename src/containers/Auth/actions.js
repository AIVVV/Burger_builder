import axios from 'axios';

import { localStorage } from '../../common/LocalStorage';
import { settings, config } from '../../common/api/api-config';
import { actionHelpersAuth } from './actionsHelpers';

const singOutTimeout = expireTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(actionHelpersAuth.singOut());
    }, expireTime * 1000);
  };
};

export const singUp = (email, password) => {
  return dispatch => {
    const credentials = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    dispatch(actionHelpersAuth.singUpStart());
    axios
      .post(
        config.authURL(settings.protocol, settings.authSingUp, settings.apiKey),
        credentials,
      )
      .then(response => {
        // console.log(response.data);
        dispatch(
          actionHelpersAuth.singUpSuccess(
            response.data.idToken,
            response.data.localId,
          ),
        );
      })
      .catch(error => {
        // console.log(error.response.data.error);
        dispatch(actionHelpersAuth.singUpFail(error.response.data.error));
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

    dispatch(actionHelpersAuth.singInStart());
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
        localStorage.Save('registered', response.data.registered);

        dispatch(
          actionHelpersAuth.singInSuccess(
            response.data.idToken,
            response.data.localId,
            response.data.registered,
          ),
        );
        dispatch(singOutTimeout(response.data.expiresIn));
      })
      .catch(error => {
        // console.log(error.response.data.error);
        dispatch(actionHelpersAuth.singInFail(error.response.data.error));
      });
  };
};

export const authChekState = () => {
  return dispatch => {
    let token = localStorage.get('token');
    if (!token) {
      dispatch(actionHelpersAuth.singOut());
    } else {
      let expirationDate = new Date(localStorage.get('expirationDate'));

      if (expirationDate > new Date()) {
        dispatch(actionHelpersAuth.singOut());
      } else {
        let userId = localStorage.get('userId');
        let registered = localStorage.get('registered');
        dispatch(actionHelpersAuth.singInSuccess(token, userId, registered));
        dispatch(singOutTimeout(expirationDate.getSeconds() - new Date().getSeconds()));
      }
    }
  };
};
