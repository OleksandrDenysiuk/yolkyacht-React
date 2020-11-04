import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text, Button, Input, withTheme } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { isEmail } from '../../utils/helpers';


export class LoginView extends Component {

  state = {
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    isLogging: false,
    loginError: ''
  }

  handleLogin() {
    if( this.verifyLoginForm() ) {
      this.autoLoginViaAPI(this.state.email, this.state.password);
    }
  }

  autoLoginViaAPI(email, password) {
    const { auth } = this.props.auth;
    this.setState({loginError: ''});
    this.setState({isLogging: true})

    auth.loginViaAPI(email, password)
      .then(
        (result) => {
          this.setState({isLogging: false});
          const { navigate } = this.props.navigation;
          navigate('App');
        },
        (error) => {
          this.setState({loginError: error});
          this.setState({isLogging: false});
        },
      );
  }

  verifyLoginForm() {
    const emailFieldValidated = this.validateEmailField();
    const passwordFieldValidates = this.validatePasswordField();

    return emailFieldValidated && passwordFieldValidates;
  }

  validatePasswordField() {
    let passwordError = '';
    if( this.state.password.length === 0 ) {
      passwordError = 'Password is required';
    }
    this.setState({passwordError: passwordError});
    return passwordError.length === 0;
  }

  validateEmailField() {
    let emailError = '';
    if( this.state.email.length === 0 ) {
      emailError = 'Email is required';
    } else {
      if( !isEmail(this.state.email) ) {
        emailError = 'Invalid email';
      }
    }
    this.setState({emailError: emailError});
    return emailError.length === 0;
  }

  render() {
    const { theme } = this.props;
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 20, marginHorizontal: 16}}>
        <Text h4 style={{ color: theme.colors.primary }} >Login</Text>
        <Input
          autoCapitalize = 'none'
          placeholder='Email'
          label='Email *'
          onChangeText={(text) => this.setState({email: text})}
          value={this.state.email}
          containerStyle={{marginTop: 30}}
          leftIcon={
            <Icon name='email' color={theme.colors.primary} size={24} style={{marginLeft:-10, marginRight: 10}}/>
          }
          errorStyle={{ color: theme.colors.error }}
          errorMessage={this.state.emailError}
        />
        <Input
          autoCapitalize = 'none'
          placeholder='Password'
          label='Password *'
          onChangeText={(text) => this.setState({password: text})}
          value={this.state.password}
          containerStyle={{marginTop: 30}}
          leftIcon={
            <Icon name='lock' size={24} color={theme.colors.primary} style={{marginLeft:-10, marginRight: 10}}/>
          }
          errorStyle={{ color: theme.colors.error }}
          errorMessage={this.state.passwordError}
        />
        <Text h4 style={{color: theme.colors.error, marginTop: 20}}>{this.state.loginError}</Text>
        <Button
          title="Login"
          type='solid'
          style={{width: 200, marginTop: 20}}
          loading={this.state.isLogging}
          onPress={() => this.handleLogin()}
        />
        <Text h5 style={{ color: theme.colors.gray0, marginTop: 10 }} >or</Text>
        <Button
          title="Sign Up"
          type="outline"
          style={{width: 200, marginTop: 10}}
          loading={this.state.isLogging}
          onPress={() => navigate('SignUpView')}
        />
      </View >
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});
const mapActionsToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapActionsToProps)(withTheme(LoginView));
