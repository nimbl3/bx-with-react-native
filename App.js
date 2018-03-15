import React from 'react';
import { Navigation } from 'react-native-navigation';
import { StyleSheet, Text, View } from 'react-native';

import MarketScreen from './src/screens/MarketScreen/MarketScreen';
import ActiveBuyOrderScreen from './src/screens/OrderScreen/ActiveBuyOrderScreen';
import ActiveSellOrderScreen from './src/screens/OrderScreen/ActiveSellOrderScreen';
import CompletedOrderScreen from './src/screens/CompletedOrderScreen/CompletedOrderScreen';

import startTabs from './src/screens/MainTabs/startMainTabs';

Navigation.registerComponent("bx.marketScreen", () => MarketScreen);
Navigation.registerComponent("bx.activeBuyOrderScreen", () => ActiveBuyOrderScreen);
Navigation.registerComponent("bx.activeSellOrderScreen", () => ActiveSellOrderScreen);
Navigation.registerComponent("bx.completedOrderScreen", () => CompletedOrderScreen);

startTabs();