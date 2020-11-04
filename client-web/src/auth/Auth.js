import auth0 from 'auth0-js';
import store from "../store/store";
import { resetUserCredentials, setUserCredentials } from '../actions/auth/index'


export default class Auth {

  constructor(history) {
    console.log("Auth.constructor().  history: ",history);
    this.history = history;
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URI,
      responseType: 'token id_token',
      scope: 'openid profile email'
    })
  }

  login = () => {
    console.log("Auth.login()");
    this.auth0.authorize();
  }

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

  setSession = (authResult) => {
    console.log("setSession().  authResult: ",authResult);
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    const userCredentials = {
      accessToken: authResult.accessToken,
      idToken: authResult.idToken,
      expiresAt: expiresAt,
      isAuthenticated: true,
      user: {
        name: authResult.idTokenPayload.name,
        email: authResult.idTokenPayload.email
      },
    }
    store.dispatch(setUserCredentials(userCredentials));
    this.scheduleTokenRenewal(expiresAt);
  }

  logout = () => {
    store.dispatch(resetUserCredentials());
    const logoutURL = process.env.NODE_ENV === 'production' ? `${process.env.REACT_APP_AUTH0_DEFAULT_LOGOUT_URI}` : 'http://localhost:3000';

    this.auth0.logout({
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      returnTo: logoutURL
    })
  };

  renewToken(cb) {
    console.log("renewToken(). this.auth0: ",this.auth0);
    this.auth0.checkSession( {}, (err, result) => {
      if( err ) {
        console.log(`Error anew Auth0 session: ${err.error} - ${err.error_description}`);
      } else {
        this.setSession(result);
      }

      if(cb) cb(err, result);
    })
  }

  scheduleTokenRenewal(expiresAt) {
    console.log("scheduleTokenRenewal().  expiresAt: ",expiresAt);
    // commented out as _expiresAt is not defined
    const delay = expiresAt - Date.now();
    //const delay = 360000;
    if( delay > 0 ) setTimeout(() => this.renewToken(), delay);
  }
}

