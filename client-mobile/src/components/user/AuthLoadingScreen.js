import React from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
//import * as SecureStore from 'expo-secure-store';
import { AsyncStorage } from 'react-native';

export class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {

    //await SecureStore.deleteItemAsync('accessToken');
    //await SecureStore.deleteItemAsync('idToken');
    //const accessToken = await SecureStore.getItemAsync('accessToken');
    const accessToken = await AsyncStorage.getItem('accessToken');
    //console.log("accessToken: ",accessToken);

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(accessToken ? 'App' : 'Auth');
    //this.props.navigation.navigate('App');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
