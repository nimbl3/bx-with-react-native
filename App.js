import React from 'react';
import { Navigation } from 'react-native-navigation';
import { StyleSheet, Text, View } from 'react-native';

import MarketScreen from './src/screens/MarketScreen/MarketScreen';
import BalanceScreen from './src/screens/BalanceScreen/BalanceScreen';
import AuthScreen from './src/screens/AuthScreen/AuthScreen';


import startTabs from './src/screens/MainTabs/startMainTabs';

Navigation.registerComponent("bx.marketScreen", () => MarketScreen);
Navigation.registerComponent("bx.balanceScreen", () => BalanceScreen);
Navigation.registerComponent("bx.authScreen", () => BalanceScreen);



startTabs();