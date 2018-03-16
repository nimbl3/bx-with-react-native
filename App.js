import React from 'react';
import { Navigation } from 'react-native-navigation';
import { StyleSheet, Text, View } from 'react-native';

import MarketScreen from './src/screens/MarketScreen/MarketScreen';
import BalanceScreen from './src/screens/CompletedOrderScreen/CompletedOrderScreen';

import startTabs from './src/screens/MainTabs/startMainTabs';

Navigation.registerComponent("bx.marketScreen", () => MarketScreen);
Navigation.registerComponent("bx.balance", () => BalanceScreen);

startTabs();