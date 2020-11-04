import * as SecureStore from 'expo-secure-store';
import { AsyncStorage } from 'react-native';
import Auth0 from 'react-native-auth0';
import axios from 'axios';
import store from '../store/store';
import jwtDecode from 'jwt-decode';
import { resetUserCredentials, setUserCredentials } from '../actions/auth';
const queryString = require('query-string');
import credentials from '../auth0-credentials';


export default class Auth {
  constructor() {
    this.auth0 = new Auth0(credentials);
  }

  login = () => {
    this.auth0.authorize();
  }

    // TODO: Should be fixed instead of ignored
    // eslint-disable-next-line no-async-promise-executor
    loginViaAPI = async (email, password) =>  new Promise(async (resolves, rejects) => {
    const loginParameters = {
      client_id: credentials.clientId,
      //audience: 'https://dev-alliedyacht.auth0.com/api/v2/',
      connection: credentials.connection,
      username: email,
      password: password,
      scope: 'openid',
      grant_type: 'password',
    }
    console.log("loginParameters: ", loginParameters);

    try {
      const response = await axios.post(`https://${credentials.domain}/oauth/token`, queryString.stringify(loginParameters), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });
      // Success 🎉
      //console.log("Success response: ",response);
      //console.log("response.data.access_token: ",response.data.access_token);
      //console.log("response.id_token: ",response.data.id_token);
      this.setSession(response.data);
      resolves(response.data);
    } catch (error) {
      // Error 😨
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        //console.log("error.response.data: ",error.response.data);
        //console.log("error.response.data.message: ",error.response.data.message);
        //console.log("error.response.data.description: ",error.response.data.description);
        //console.log("error.response.status: ",error.response.status);
        //console.log("error.response.statusText: ",error.response.statusText);
        //console.log("error.response.statusText: ",error.response.headers);
        //console.log("error.response.config: ",error.response.config);
        //console.log("error.response: ",error.response.request);
        rejects(error.response.data.message || error.response.data.description || error.response.data.error_description);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log("error.request:",error.request);
        rejects('Login Error!');
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log('Common Login Error', error.message);
        rejects(error.message);
      }
    }
  });

  // TODO: Should be fixed instead of ignored
  // eslint-disable-next-line no-async-promise-executor
  signUpViaAPI = async (userData) => new Promise(async (resolves, rejects) => {
    const signUpParameters = {
      ...userData,
      client_id: credentials.clientId,
      connection: credentials.connection,
    }
    console.log("signUpParameters: ", signUpParameters);

    try {
      const response = await axios.post(`https://${credentials.domain}/dbconnections/signup`, signUpParameters, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      // Success 🎉
      //console.log("Success response: ",response);
      resolves(response);
    } catch (error) {
      // Error 😨
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        //console.log("error.response.data: ",error.response.data);
        //console.log("error.response.data.message: ",error.response.data.message);
        //console.log("error.response.data.description: ",error.response.data.description);
        //console.log("error.response.status: ",error.response.status);
        //console.log("error.response.statusText: ",error.response.statusText);
        //console.log("error.response.statusText: ",error.response.headers);
        //console.log("error.response.config: ",error.response.config);
        //console.log("error.response: ",error.response.request);
        rejects(error.response.data.message || error.response.data.description);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        //console.log("error.request:",error.request);
        rejects('Sign Up Error!');
      } else {
        // Something happened in setting up the request and triggered an Error
        //console.log('Common Error', error.message);
        rejects(error.message);
      }
    }
  });

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if( authResult && authResult.accessToken && authResult.idToken ) {
        this.setSession(authResult);
        this.history.push("/");
      } else if(err) {
        this.history.push("/");
        console.log(err);
      }
    })
  }

  setSession = async (authResult) => {
    //console.log("setSession().  authResult: ",authResult);
    //await SecureStore.setItemAsync('accessToken', authResult.access_token);
    //await SecureStore.setItemAsync('idToken', authResult.id_token);
    await AsyncStorage.setItem('accessToken', authResult.access_token);
    await AsyncStorage.setItem('idToken', authResult.id_token);
    const decodedIdToken = jwtDecode(authResult.id_token);
    //console.log("decodedIdToken: ",decodedIdToken);
    const expiresAt = JSON.stringify(
      authResult.expires_in * 1000 + new Date().getTime()
    );
    const userCredentials = {
      accessToken: authResult.access_token,
      idToken: authResult.id_token,
      expiresAt: expiresAt,
      isAuthenticated: true,
      user: {
        name: decodedIdToken.name,
        email: decodedIdToken.email
      },
    }
    store.dispatch(setUserCredentials(userCredentials));
    //this.scheduleTokenRenewal();
  }

  logout = async () => {
    //await SecureStore.deleteItemAsync('accessToken');
    await AsyncStorage.removeItem('accessToken');
    //await .removeItem('accessToken');
    store.dispatch(resetUserCredentials());
    console.log("this.auth0: ",this.auth0);
    /*this.auth0.logout({
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      returnTo: 'dev-alliedyacht.auth0.com'  //'http://localhost:3000'
    });*/
    const logoutParameters = {
      client_id: credentials.clientId
    }
    try {
      await axios.get(`https://${credentials.domain}/v2/logout`, queryString.stringify(logoutParameters), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });
      console.log("logout success");
    } catch (error) {
      // Error 😨
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log("error.response: ", error.response.request);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log("error.request:",error.request);
        //rejects('Login Error!');
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log('Common Login Error', error.message);
        //rejects(error.message);
      }
    }
  };

  // TODO should be fixed instead of ignored
  // eslint-disable-next-line no-async-promise-executor
  anewTokenViaAPI = async () =>  new Promise(async (resolves, rejects) => {
    const accessToken = await SecureStore.getItemAsync('accessToken');
    const loginParameters = {
      client_id: credentials.clientId,
      //audience: 'https://dev-alliedyacht.auth0.com/api/v2/',
      refresh_token: accessToken,
      connection: credentials.connection,
      scope: 'openid',
      grant_type: 'refresh_token',
    }
    console.log("loginParameters: ", loginParameters);

    try {
      const response = await axios.post(`https://${credentials.domain}/oauth/token`, queryString.stringify(loginParameters), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });
      // Success 🎉
      console.log("Success response: ",response);
      console.log("response.data.access_token: ",response.data.access_token);
      console.log("response.id_token: ",response.data.id_token);
      this.setSession(response.data);
    } catch (error) {
      // Error 😨
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log("error.response.data: ",error.response.data);
        console.log("error.response.data.message: ",error.response.data.message);
        console.log("error.response.data.description: ",error.response.data.description);
        console.log("error.response.status: ",error.response.status);
        console.log("error.response.statusText: ",error.response.statusText);
        console.log("error.response.statusText: ",error.response.headers);
        console.log("error.response.config: ",error.response.config);
        console.log("error.response: ",error.response.request);
        rejects(error.response.data.message || error.response.data.description || error.response.data.error_description);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */

        rejects('A new Token Error!');
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log('Common Error', error.message);
        rejects(error.message);
      }
    }
  });

  renewToken(cb) {
    console.log("renewToken(). this.auth0: ",this.auth0);
    this.auth0.checkSession({}, (err, result) => {
      if( err ) {
        console.log(`Error anew Auth0 session: ${err.error} - ${err.error_description}`);
      } else {
        this.setSession(result);
      }

      if(cb) cb(err, result);
    })
  }

  scheduleTokenRenewal() {
    // commented out as _expiresAt is not defined
    // const delay = _expiresAt - Date.now();
    const delay = 36000;
    if( delay > 0 ) setTimeout(() => this.anewTokenViaAPI(), delay);
  }
}
