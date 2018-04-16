import React from 'react';
import MainTabBarScreen from '../Screens/MainTabBarScreen';
import { StackNavigator } from 'react-navigation';

const stack = StackNavigator({
  MainTabBarScreen: {
    screen: MainTabBarScreen,
      navigationOptions: {
        header: null,
      }
  },
});

export default stack;