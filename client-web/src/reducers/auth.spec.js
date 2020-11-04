import actions from '../constants/action_types';
import reducer from './auth';
import { initialState } from './auth';


describe('Auth0 reducer', () => {

  const defaultAuthReducerState = initialState;

  it("SET_AUTH action", () => {
    const testAuth0 = {client: () => {}, name: 'Auth0 client'};
    const action = {
      type: actions.Auth.SET_AUTH,
      payload: testAuth0
    };

    const expectedState = {
      ...defaultAuthReducerState,
      auth: action.payload
    };

    expect(reducer(defaultAuthReducerState, action)).toEqual(expectedState);
  })

  it("SET_USER_CREDENTIALS action", () => {
    const testCredentials = {
      accessToken: 'testAccessToken',
      idToken: 'testIdToken',
      expiresAt: 'testExpiresAt',
      user: {
        name: 'user name',
        email: 'email'
      }
    };
    const action = {
      type: actions.Auth.SET_USER_CREDENTIALS,
      payload: testCredentials
    };

    const expectedState = {
      ...defaultAuthReducerState,
      accessToken: action.payload.accessToken,
      idToken: action.payload.idToken,
      expiresAt: action.payload.expiresAt,
      isAuthenticated: true,
      user: {
        ...action.payload.user,
        name: action.payload.user.name,
        email: action.payload.user.email
      }
    };

    expect(reducer(defaultAuthReducerState, action)).toEqual(expectedState);
  })

  it("RESET_USER_CREDENTIALS action", () => {
    const action = {
      type: actions.Auth.RESET_USER_CREDENTIALS
    };

    const expectedState = {
      ...defaultAuthReducerState,
      accessToken: null,
      idToken: null,
      expiresAt: null,
      isAuthenticated: false,
      user: {
        name: '',
        email: ''
      }
    };

    expect(reducer(defaultAuthReducerState, action)).toEqual(expectedState);
  })

})
