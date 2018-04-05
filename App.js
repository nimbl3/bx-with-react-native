import React from 'react';
import { Navigation } from 'react-native-navigation';
import { StyleSheet, Text, View } from 'react-native';

import MarketScreen from './src/screens/MarketScreen/MarketScreen';
import AuthScreen from './src/screens/AuthScreen/AuthScreen';
import BalanceScreen from './src/screens/BalanceScreen/BalanceScreen';

import AuthenticationScreen from './src/screens/AuthScreen/AuthenticationScreen';

import startTabs from './src/screens/MainTabs/startMainTabs';

Navigation.registerComponent('bx.marketScreen', () => MarketScreen);
Navigation.registerComponent('bx.authScreen', () => AuthScreen);
Navigation.registerComponent('bx.balanceScreen', () => BalanceScreen);
Navigation.registerComponent(
  'bx.authenticationScreen',
  () => AuthenticationScreen
);

const getAPIFromPersistent = () => {
  Promise.all([
    AsyncStorage.getItem('apiKey'),
    AsyncStorage.getItem('apiSecret'),
  ]).then(value => {
    this.setState({ key: value[0], secret: value[1] });
    if (value[0].length == 12 && value[1].length == 12) {
      this.setState({ isLoggedIn: true });
    }
  });
};

const isLoggedIn = () => {
  return false;
}

const authScreen = {
  screen: 'bx.authenticationScreen',
  navigatorStyle: {
    navBarHidden: true,
  },
};

const marketScreen = {
    screen: 'bx.marketScreen',
    navigatorStyle: {
      navBarHidden: true,
    },
  };

Navigation.startSingleScreenApp({
  screen: !isLoggedIn() ? authScreen : marketScreen,
  animationType: 'fade',
});
