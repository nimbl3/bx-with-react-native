import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

import AuthenticationScreen from './src/screens/AuthScreen/AuthenticationScreen';
import MainTabBarScreen from './src/screens/MainTabBarScreen/MainTabBarScreen';
import MainFlowController from './src/flowController/MainFlowController'

export default class App extends React.Component {
  render() {
    return <MainFlowController />
  }
}


// const getAPIFromPersistent = () => {
//   Promise.all([
//     AsyncStorage.getItem('apiKey'),
//     AsyncStorage.getItem('apiSecret'),
//   ]).then(value => {
//     this.setState({ key: value[0], secret: value[1] });
//     if (value[0].length == 12 && value[1].length == 12) {
//       this.setState({ isLoggedIn: true });
//     }
//   });
// };

// const isLoggedIn = () => {
//   return false;
// }

// const authScreen = {
//   screen: 'bx.authenticationScreen',
//   navigatorStyle: {
//     navBarHidden: true,
//   },
// };

// const marketScreen = {
//     screen: 'bx.marketScreen',
//     navigatorStyle: {
//       navBarHidden: true,
//     },
//   };

// Navigation.startSingleScreenApp({
//   screen: !isLoggedIn() ? authScreen : marketScreen,
//   animationType: 'fade',
// });
