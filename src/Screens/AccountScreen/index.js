import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AccountCell from '../../components/screens/AccountScreen/AccountCell';
import TextButton from '../../components/common/TextButton';
import DisclosureCell from '../../components/common/DisclosureCell';
import ListViewSectionContainer from '../../components/common/ListViewSectionContainer';
import ToggleCell from '../../components/common/ToggleCell';
import CenterLabelCell from '../../components/common/CenterLabelCell';
import AuthManager from '../../Managers/AuthManager';
export default class AccountScreen extends React.Component {
  state = {
    enableNotification: true,
  };

  static navigationOptions = ({ navigate, navigation }) => ({
    title: 'Account',
    headerStyle: {
      backgroundColor: 'white',
    },
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
      <ScrollView>
        <View style={styles.view}>
          <ListViewSectionContainer withTopMargin={false}>
            <AccountCell userInfo={userInfo} />
          </ListViewSectionContainer>
          <ListViewSectionContainer withTopMargin={true}>
            <ToggleCell
              onValueChange={value => {
                this.setState({ enableNotification: value });
                alert(`Notification Turned: ${value}`);
              }}
              value={this.state.enableNotification}
              text={'Notifications'}
            />
          </ListViewSectionContainer>
          <ListViewSectionContainer withTopMargin={true}>
            <DisclosureCell
              text="Payment Information"
              onPress={() => {
                alert('Payment Information');
              }}
            />
            <DisclosureCell
              text="Terms & Conditions"
              onPress={() => {
                alert('Terms & Conditions');
              }}
            />
          </ListViewSectionContainer>
          <ListViewSectionContainer withTopMargin={true}>
            <CenterLabelCell
              text={'Sign Out'}
              onPress={() => {
                AuthManager.clear(() => {});
              }}
            />
          </ListViewSectionContainer>
        </View>
      </ScrollView>
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
  },
});
