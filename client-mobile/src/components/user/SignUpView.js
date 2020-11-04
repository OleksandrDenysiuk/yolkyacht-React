import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, Input, Button } from 'react-native-elements';
import { withTheme } from 'react-native-elements';


export class SignUpView extends Component {
  state = {
    email: '',
    emailError: '',
    password1: '',
    password1Error: '',
    password2: '',
    password2Error: '',
    name: '',
    nameError: '',
    isSigningUp: false,
    signUpError: ''
  }

  handleSignUp() {
    if( this.state.isSigningUp ) return;
    this.verifySignUpForm();
    if( this.verifySignUpForm() ) {
      this.setState({signUpError: ''});
      this.setState({isSigningUp: true});
      const userSignUpData = {
        email: this.state.email,
        password: this.state.password1,
        name: this.state.name
      }
      this.signUpViaAPIMock(userSignUpData);
    }
  }

  signUpViaAPIMock(userSignUpData) {
    const {auth} = this.props.auth;

    auth.signUpViaAPI(userSignUpData)
      .then(
        (json) => {
          console.log("SignUp1 result: ", json);
          auth.loginViaAPI(this.state.email, this.state.password1)
            .then(
              (json) => {
                console.log("Login1 result: ", json);
                this.setState({isSigningUp: false});
                const { navigate } = this.props.navigation;
                navigate('App');
                //alert("Logged in after SignUp")
              },
              (error) => {
                console.log("SignUp1 error: ", error);
                this.setState({signUpError: error || 'Login Error!'});
                this.setState({isSigningUp: false});
              },
            );
        },
        (error) => {
          console.log("SignUp1 error: ", error);
          this.setState({signUpError: error || 'Common Sign Up Error!'});
          this.setState({isSigningUp: false});
        },
      );
  }

  verifySignUpForm() {
    const emailFieldValidated = this.validateEmailField();
    const password1FieldValidated = this.validatePassword1Field();
    const password2FieldValidated = this.validatePassword2Field();
    const nameFieldValidated = this.validateNameField();

    return emailFieldValidated && password1FieldValidated && password2FieldValidated && nameFieldValidated;
  }

  validateNameField() {
    let nameError = '';
    if( this.state.name.length === 0 ) {
      nameError = 'Name is required';
    } else {
      if( this.state.name.length < 3 ) {
        nameError = 'Name too short';
      }
    }
    this.setState({nameError: nameError});
    return nameError.length === 0;
  }

  validatePassword1Field() {
    let password1Error = '';
    if( this.state.password1.length < 3 ) {
      password1Error = 'Password too short';
    }
    this.setState({password1Error: password1Error});
    return password1Error.length === 0;
  }

  validatePassword2Field() {
    let password2Error = '';
    if( this.state.password2.length < 3 ) {
      password2Error = 'Password too short';
    }
    if( this.state.password1.length > 0 && this.state.password2.length > 0 && this.state.password1 !== this.state.password2 ) {
      password2Error = 'Must fit to first password';
    }
    this.setState({password2Error: password2Error});
    return password2Error.length === 0;
  }

  validateEmailField() {
    let emailError = '';
    if( this.state.email.length === 0 ) {
      emailError = 'Email is required';
    } else {
      if( !this.isEmail(this.state.email) ) {
        emailError = 'Invalid email';
      }
    }
    this.setState({emailError: emailError});
    return emailError.length === 0;
  }

  isEmail = (value) => value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

  render() {
    const { theme } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 20, marginHorizontal: 16}}>
        <Text h4 style={{ color: theme.colors.primary }} >Sign Up</Text>
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
          placeholder='Password 1'
          label='Password *'
          onChangeText={(text) => this.setState({password1: text})}
          value={this.state.password1}
          containerStyle={{marginTop: 30}}
          leftIcon={
            <Icon name='lock' size={24} color={theme.colors.primary} style={{marginLeft:-10, marginRight: 10}}/>
          }
          errorStyle={{ color: theme.colors.error }}
          errorMessage={this.state.password1Error}
        />
        <Input
          autoCapitalize = 'none'
          placeholder='Password 2'
          label='Retype Password *'
          onChangeText={(text) => this.setState({password2: text})}
          value={this.state.password2}
          containerStyle={{marginTop: 30}}
          leftIcon={
            <Icon name='lock' size={24} color={this.props.theme.colors.primary} style={{marginLeft:-10, marginRight: 10}}/>
          }
          errorStyle={{ color: theme.colors.error }}
          errorMessage={this.state.password2Error}
        />
        <Input
          placeholder='User Name'
          label='User Name *'
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name}
          containerStyle={{marginTop: 30}}
          leftIcon={
            <Icon name='account' size={24} color={this.props.theme.colors.primary} style={{marginLeft:-10, marginRight: 10}}/>
          }
          errorStyle={{ color: theme.colors.error }}
          errorMessage={this.state.nameError}
        />
        <Text h4 style={{color: theme.colors.error, marginTop: 20}}>{this.state.signUpError}</Text>
        <Button
          title="Sign Up"
          type='solid'
          style={{width: 200, marginTop: 20}}
          loading={this.state.isSigningUp}
          onPress={() => this.handleSignUp()}
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

export default connect(mapStateToProps, mapActionsToProps)(withTheme(SignUpView));
