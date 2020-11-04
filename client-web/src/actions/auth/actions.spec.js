import actions from '../../constants/action_types';
import { resetUserCredentials, setAuth, setUserCredentials } from './index';


describe('Auth reducer actions', () => {

  it('should create Auth.SET_AUTH action', () => {
    const auth = { login: 'login', uer: 'user'};
    const expectedAction = {
      type: actions.Auth.SET_AUTH,
      payload: auth
    };

    expect(setAuth(auth)).toEqual(expectedAction);
  });

  it('should create Auth.SET_USER_CREDENTIALS action', () => {
    const userCredentials = { login: 'login', uer: 'user'};
    const expectedAction = {
      type: actions.Auth.SET_USER_CREDENTIALS,
      payload: userCredentials
    };

    expect(setUserCredentials(userCredentials)).toEqual(expectedAction);
  });

  it('should create Auth.RESET_USER_CREDENTIALS action', () => {
    const userCredentials = { login: 'login', uer: 'user'};
    const expectedAction = {
      type: actions.Auth.RESET_USER_CREDENTIALS
    };

    expect(resetUserCredentials(userCredentials)).toEqual(expectedAction);
  });

});

