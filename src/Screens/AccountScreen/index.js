import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AccountScreen extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Text>Hello!, This is Account</Text>
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
