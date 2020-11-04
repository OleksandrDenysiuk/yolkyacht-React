import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Auth0 from 'react-native-auth0';
import { Platform } from 'react-native';
import { colors, ThemeProvider } from 'react-native-elements';
import { AuthLoadingScreen } from './components/user/AuthLoadingScreen';
import Landing from './layout/Landing';
import LoginView from './components/user/LoginView';
import SignUpView from './components/user/SignUpView';
import { setAuth } from './actions/auth';
import Auth from './auth/Auth0';


const AppStack = createStackNavigator({ Landing: Landing });
const AuthStack = createStackNavigator({
  LoginView: LoginView, SignUpView: SignUpView
});

const platformTheme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios,
    }),
  },
};

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

class AuthApp extends Component {

  constructor(props) {
    super(props);

    const auth = new Auth();
    this.props.setAuth(auth);
  }

  render() {
    return (
      <ThemeProvider theme={platformTheme}>
        <AppContainer />
      </ThemeProvider>
    )
  }

}

const mapStateToProps = state => ({
  auth: state.auth,
});
const mapActionsToProps = dispatch => ({
  dispatch,
  setAuth: (auth) => {
    dispatch(setAuth(auth));
  }
});

export default connect(mapStateToProps, mapActionsToProps)(AuthApp);

