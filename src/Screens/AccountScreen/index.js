import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AccountCell from '../../components/AccountScreen/AccountCell';
import TextButton from '../../components/common/TextButton';
export default class AccountScreen extends React.Component {
  static navigationOptions = ({ navigate, navigation }) => ({
    title: 'Account',
    headerRight: (
      <View style={styles.header}>
        <TextButton
          title={'Close'}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    ),
  });
  render() {
    const userInfo = {
      imageURL: 'https://avatars1.githubusercontent.com/u/165856?s=460&v=4',
      name: 'Issarapong Poesua',
      email: 'dekablade01@gmail.com',
    };
    return (
      <View style={styles.view}>
        <AccountCell userInfo={userInfo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#EFEFF4',
  },
  header: {
    paddingRight: 17,
  }
});
