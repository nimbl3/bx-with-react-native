import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import AuthenticationScreen from './src/Screens/AuthScreen';
import MainFlowController from './src/FlowControllers/MainFlowController';
import AuthManager from './src/Managers/AuthManager';

export default class App extends React.Component {
  state = {};

  render() {
    AuthManager.getAPIFromPersistent((key, secret, isValid) => {
      this.setState({ isLoggedIn: isValid });
    });

    if (this.state.isLoggedIn === false) {
      return (
        <AuthenticationScreen
          didAuthenCompletion={isValid => {
            this.setState({ isLoggedIn: isValid });
          }}
        />
      );
    } else if (this.state.isLoggedIn === true) {
      return <MainFlowController />;
    } else {
      return <View />;
    }
  }
}
