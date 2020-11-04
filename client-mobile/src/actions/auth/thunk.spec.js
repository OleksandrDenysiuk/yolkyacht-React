import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import actions from '../../constants/action_types';
import { setUserCredentials, setAuth, resetUserCredentials } from './index';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Call Actions for Auth reducer', () => {

  it('should create actions.Auth.SET_USER_CREDENTIALS action', async () => {
    const userCredentials = { login: 'login', uer: 'user'};
    const expectedActions = [
      { type: actions.Auth.SET_USER_CREDENTIALS, payload: userCredentials }
    ]
    let store = mockStore({ports: []});

    store.dispatch(setUserCredentials(userCredentials));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create actions.Auth.SET_AUTH action', async () => {
    const auth = { login: 'login', uer: 'user'};
    const expectedActions = [
      { type: actions.Auth.SET_AUTH, payload: auth }
    ]
    let store = mockStore({ports: []});

    store.dispatch(setAuth(auth));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create actions.Auth.RESET_USER_CREDENTIALS action', async () => {
    const expectedActions = [
      { type: actions.Auth.RESET_USER_CREDENTIALS }
    ]
    let store = mockStore({ports: []});

    store.dispatch(resetUserCredentials());

    expect(store.getActions()).toEqual(expectedActions);
  });

});

