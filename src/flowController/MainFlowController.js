import React from 'react';
import { View } from 'react-native';
import AuthenticationScreen from '../screens/AuthScreen/AuthenticationScreen';
import MainTabBarScreen from '../screens/MainTabBarScreen/MainTabBarScreen';
import { StackNavigator } from 'react-navigation';

// export default class MainFlowController extends React.Component {
//   isLoggedIn = false;
//   render() {
//     return StackNavigator({
//       AuthenticationScreen: {
//         screen: AuthenticationScreen,
//         navigationOptions: {
//           header: null,
//         }
//       },
//       MainTabBarScreen: {
//         screen: MainTabBarScreen,
//       }
//     }, { initialRouteName: !this.isLoggedIn ? "AuthenticationScreen" : "MainTabBarScreen"  })
//   }
// }

const stack = StackNavigator({
  AuthenticationScreen: {
    screen: AuthenticationScreen,
    navigationOptions: { header: null },
  },
});

export default stack;

// {
//   auth: {
//     screen: AuthenticationScreen,
//   },
//   tabbar: {
//     screen: MainTabBarScreen,
//   },
// },
// {
//   initialRouteName: !this.isLoggedIn
//     ? 'AuthenticationScreen'
//     : 'MainTabBarScreen',
// }
