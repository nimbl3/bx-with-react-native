import React, { Component } from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import DummyScreen from '../DummyScreen/';
import DashboardFlow from '../../FlowControllers/DashboardFlow'

export default class MainTabBarController extends Component {
  render() {
    const TabBar = TabNavigator({
      Dashboard: {
        screen: DashboardFlow,
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
