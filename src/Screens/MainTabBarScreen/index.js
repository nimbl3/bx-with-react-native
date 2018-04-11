import React, { Component } from 'react';
import { View } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import DummyScreen from '../DummyScreen/';
import DashboardScreen from '../DashboardScreen/';

export default class MainTabBarController extends Component {
  render() {
    const TabBar = TabNavigator({
      Dashboard: {
        screen: DashboardScreen,
      },
      Create: {
        screen: DummyScreen,
      },
      Wallet: {
        screen: DummyScreen,
      },
    }, {
      tabBarPosition: 'bottom',
      tabBarComponent: TabBarBottom,
      swipeEnabled: false,
      animationEnabled: false,
    });
    return <TabBar />
  }
}
