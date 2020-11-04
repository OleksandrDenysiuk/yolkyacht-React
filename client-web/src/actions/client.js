import store from '../store/store.js';
import axios from 'axios';
import { createAction, createSuccessAction, createFailureAction  } from './createActions';


const { dispatch } = store;

const get = (url, actionType, serverData, storeData) => new Promise((resolves, rejects) => {
  dispatch(createAction(actionType, storeData));
  axios
    .get(url, serverData)
    .then(res => {
      resolves(res.data);
    })
    .catch(error => {
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        rejects(error.response.data);
      } else {
        /*
        * No response or low-level network error - handle it together
        */
        rejects('Network error!')
      }
    });
})
  .then(
    (json) => {
      dispatch(createSuccessAction(actionType, json));
      return json;
    },
    (error) => {
      dispatch(createFailureAction(actionType, error));
      return Promise.reject(error);
    },
  );

const post = (url, actionType, serverData, storeData) => new Promise((resolves, rejects) => {
  dispatch(createAction(actionType, storeData));
  axios
    .post(url, serverData)
    .then(res => {
      resolves(res.data);
    })
    .catch(error => {
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        rejects(error.response.data);
      } else {
        /*
        * No response or low-level network error - handle it together
        */
        rejects('Network error!')
      }
    });
})
  .then(
    (json) => {
      dispatch(createSuccessAction(actionType, json));
      return json;
    },
    (error) => {
      dispatch(createFailureAction(actionType, error));
      return Promise.reject(error);
    },
  );

export default {
  get,
  post
};
