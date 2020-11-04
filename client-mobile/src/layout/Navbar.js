import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';


export default class Navbar extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Navbar form here </Text>
      </View >
    )
  }
}
/*
const mapStateToProps = state => ({
  auth: state.auth,
});
const mapActionsToProps = dispatch => ({
  dispatch,
});

export default connect(mapStateToProps, mapActionsToProps)(LoginView);*/
