import { createStore, applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk";
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import rootReducer from "../reducers";

const initialState = {};
export const history = createBrowserHistory();

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk, logger),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
    compose
  )
);

export default store;
