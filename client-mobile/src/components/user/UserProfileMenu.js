import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text, Button, withTheme } from 'react-native-elements';
import { withNavigation } from 'react-navigation';


export class UserProfileMenu extends Component {

  handleLogout = () => {
    //console.log("handleLogout()");
    const { auth } = this.props.auth;
    auth.logout();
    //console.log("this.props: ",this.props);
    const { navigate } = this.props.navigation;
    navigate('Auth');
  }

  render() {
    const { theme } = this.props;
    const { auth } = this.props.auth;
    //console.log("this.props: ",this.props);
    //console.log("auth:",auth);

    return (
      <View>
        {auth.isAuthenticated ?
          <Text style={{ color: '#fff' }}>user name here</Text>
          :
          <Button
            title='Logout'
            outline={{width: 50, height: 30}}
            titleStyle={{color: 'white', fontSize: 16}}
            onPress={() => this.handleLogout()}
          />
        }
      </View>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});
const mapActionsToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapActionsToProps)(withNavigation(withTheme(UserProfileMenu)));
