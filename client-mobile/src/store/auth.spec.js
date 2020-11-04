import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { setUserCredentials, setAuth, resetUserCredentials } from '../actions/auth';
import { applyMiddleware, createStore } from 'redux';
import authReducer from '../reducers/auth';
import { initialState } from '../reducers/auth';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Store for Auth section', () => {

  it('should execute actions.Auth.SET_USER_CREDENTIALS action', async () => {
    const userCredentials = { ...initialState, user: {name: 'User Name', email: 'userEmail'}};
    const store = createStore(authReducer, applyMiddleware(thunk));

    store.dispatch(setUserCredentials(userCredentials));

    expect(store.getState()).toEqual({...userCredentials, isAuthenticated: true});
  });

  it('should execute actions.Auth.SET_AUTH action', async () => {
    const testAuthentication = { login: 'login', uer: 'user'};
    const store = createStore(authReducer, applyMiddleware(thunk));

    store.dispatch(setAuth(testAuthentication));

    expect(store.getState().auth).toEqual(testAuthentication);
  });

  it('should execute actions.Auth.RESET_USER_CREDENTIALS action', async () => {
    const store = createStore(authReducer, applyMiddleware(thunk));

    store.dispatch(resetUserCredentials());

    expect(store.getState()).toEqual(initialState);
  });

});
