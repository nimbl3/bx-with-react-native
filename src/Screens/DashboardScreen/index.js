import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class DashboardScreen extends Component {
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
    backgroundColor: 'rgba(0, 255, 0, 1)',
  },
});
