import React from 'react';
import { StackNavigator } from 'react-navigation';
import DashboardScreen from '../Screens/DashboardScreen';
import AccountScreen from '../Screens/AccountScreen';
import CircularImageButton from '../components/common/CircularImageButton';

export default StackNavigator({
  DashboardScreen: {
    screen: DashboardScreen,
    navigationOptions: {
      headerLeft: (
        <CircularImageButton
          url={'https://avatars1.githubusercontent.com/u/6483170?s=460&v=4'}
          onPress={ () => {} }
        />
      ),
    },
  },
  AccountScreen: {
    screen: AccountScreen,
    navigationOptions: {
      headerLeft: null,
    },
  },
});
