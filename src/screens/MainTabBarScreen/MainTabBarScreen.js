import React from 'react';
import {} from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import DummyScreen from '../DummyScreen/DummyScreen';

class MainTabBarController extends React.Component {
  render() {
    return TabNavigator({
      Dashboard: {
        screen: DummyScreen,
      },
      Create: {
        screen: DummyScreen,
      },
      Wallet: {
        screen: DummyScreen,
      },
    });
  }
}

export default MainTabBarController;