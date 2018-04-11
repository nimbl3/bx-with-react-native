import React from 'react';
import { View } from 'react-native';
import AuthenticationScreen from '../Screens/AuthScreen';
import MainTabBarScreen from '../Screens/MainTabBarScreen';
import CircularImageButton from '../components/common/CircularImageButton'
import { StackNavigator } from 'react-navigation';

const stack = StackNavigator({
  MainTabBarScreen: {
    screen: MainTabBarScreen,
    navigationOptions: {
      headerLeft: <CircularImageButton url={"https://avatars1.githubusercontent.com/u/6483170?s=460&v=4"} onPress={ () => { alert("navigate to account screen")}}/>,
      title: "Dashboard",
    },
  },
});

export default stack;
