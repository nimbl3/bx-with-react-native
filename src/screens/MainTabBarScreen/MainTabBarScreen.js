import React from 'react';
import {} from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import DummyScreen from '../DummyScreen/DummyScreen';

export default class MainTabBarController extends React.Component {
  render() {
    const TabBar = TabNavigator({
      Dashboard: {
        screen: DummyScreen,
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
