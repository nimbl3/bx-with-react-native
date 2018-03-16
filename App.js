import React from 'react';
import { Navigation } from 'react-native-navigation';
import { StyleSheet, Text, View } from 'react-native';

import MarketScreen from './src/screens/MarketScreen/MarketScreen';
import AuthScreen from './src/screens/AuthScreen/AuthScreen';
import BalanceScreen from './src/screens/BalanceScreen/BalanceScreen';

import startTabs from './src/screens/MainTabs/startMainTabs';

Navigation.registerComponent("bx.marketScreen", () => MarketScreen);
Navigation.registerComponent("bx.authScreen", () => AuthScreen);
Navigation.registerComponent("bx.balanceScreen", () => BalanceScreen);

startTabs();