import store from '../store/store.js';
import { createAction, createSuccessAction, createFailureAction  } from './createActions';
import axios from 'axios';
import { Platform } from 'react-native';


const localIp = Platform.OS === 'android' ? 'http://10.0.2.2:5000' : 'http:localhost:5000'
const apiBaseUrl = process.env.NODE_ENV === 'development' ? localIp : ''

const { dispatch } = store;

const get = (url, actionType, serverData, storeData) => new Promise((resolves, rejects) => {
  dispatch(createAction(actionType, storeData));
  console.log("get().  url: ",url);
  console.log("apiBaseUrl+url: ",apiBaseUrl+url);

  axios
    .get(apiBaseUrl+url, serverData)
    .then(res => {
      console.log('res: ',res);
      resolves(res.data);
    })
    .catch(error => {
      if (error.response) {
        console.log("error.response: ",error.response);
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        //rejects(error.response.data.message || error.response.data.description || error.response.data.error_description);
        rejects(error.response.data);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        //rejects('Failed to get data from server!');
        rejects('Network error!')
      } else {
        // Something happened in setting up the request and triggered an Error
        //rejects(error.message);
        rejects('Network error!')
      }
    });
})
  .then(
    (json) => {
      console.log("json: ",json);
      dispatch(createSuccessAction(actionType, json));
      return json;
    },
    (error) => {
      console.log("Common Axios GET error: ",error);
      dispatch(createFailureAction(actionType, error));
      return Promise.reject(error);
    },
  );

const post = (url, actionType, serverData, storeData) => new Promise((resolves, rejects) => {
  dispatch(createAction(actionType, storeData));
  axios
    .post(apiBaseUrl+url, serverData)
    .then(res => {
      console.log("res: ",res);
      resolves(res.data);
    })
    .catch(error => {
      console.log("post.catch().  response: ",error.response);
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        //rejects(error.response.data.message || error.response.data.description || error.response.data.error_description);
        rejects(error.response.data);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        //rejects('Failed to get data from server!');
        rejects('Network error!')
      } else {
        // Something happened in setting up the request and triggered an Error
        //rejects(error.message);
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
      console.log("post.error: ",error);
      dispatch(createFailureAction(actionType, error));
      return Promise.reject(error);
    },
  );

export default {
  get,
  post,
};
