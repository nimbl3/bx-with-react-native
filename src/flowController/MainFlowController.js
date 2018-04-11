import React from 'react';
import { View } from 'react-native';
import AuthenticationScreen from '../screens/AuthScreen/AuthenticationScreen';
import MainTabBarScreen from '../screens/MainTabBarScreen/MainTabBarScreen';
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
