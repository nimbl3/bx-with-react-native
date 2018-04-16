import React from 'react';
import { View } from 'react-native';
import AuthenticationScreen from '../Screens/AuthScreen';
import MainTabBarScreen from '../Screens/MainTabBarScreen';
import { StackNavigator } from 'react-navigation';

const stack = StackNavigator({
  MainTabBarScreen: {
    screen: MainTabBarScreen,
    navigationOptions: {
      headerLeft: null,
      gesturesEnable: false,
    },
  },
});

export default stack;
