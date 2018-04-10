import React from 'react';
import { View } from 'react-native';
import AuthenticationScreen from '../screens/AuthScreen/AuthenticationScreen';
import MainTabBarScreen from '../screens/MainTabBarScreen/MainTabBarScreen';
import { StackNavigator } from 'react-navigation';

const stack = StackNavigator({
  AuthenticationScreen: {
    screen: AuthenticationScreen,
    navigationOptions: {
      header: null,
    },
  },
  MainTabBarScreen: {
    screen: MainTabBarScreen,
  }
});

export default stack;
