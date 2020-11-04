import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import AuthApp from './AuthApp';


export default class ClientMobile extends Component {
  render() {
    return (
      <Provider store={store}>
        <AuthApp/>
      </Provider>
    );
  }
}

//AppRegistry.registerComponent('Auth0Samples', () => ClientMobile);  
