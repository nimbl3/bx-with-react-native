import React from 'react';
import { StackNavigator } from 'react-navigation';
import DashboardScreen from '../Screens/DashboardScreen';
import AccountScreen from '../Screens/AccountScreen';
import CircularImageButton from '../components/common/CircularImageButton';

export default StackNavigator({
  DashboardScreen: {
    screen: DashboardScreen,
  },
  AccountScreen: {
    screen: AccountScreen,
    navigationOptions: {
      headerLeft: null,
    },
  },
});
