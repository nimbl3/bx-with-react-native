import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CircularImageButton from '../../components/common/CircularImageButton';

export default class DashboardScreen extends Component {
  static navigationOptions = ({ navigate, navigation }) => ({
    title: 'Dashboard',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerLeft: (
      <CircularImageButton
        url={'https://avatars1.githubusercontent.com/u/6483170?s=460&v=4'}
        onPress={() => {
          navigation.navigate('AccountScreen');
        }}
      />
    ),
  });

  render() {
    return (
      <View style={styles.view}>
        <Text>Hello!, This is DashboardScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
