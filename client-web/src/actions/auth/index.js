import actions from '../../constants/action_types';

export const setAuth = (auth) => ({
  type: actions.Auth.SET_AUTH,
  payload: auth
});

export const setUserCredentials = (userCredentials) => ({
  type: actions.Auth.SET_USER_CREDENTIALS,
  payload: userCredentials
});

export const resetUserCredentials = () => ({
  type: actions.Auth.RESET_USER_CREDENTIALS
});


