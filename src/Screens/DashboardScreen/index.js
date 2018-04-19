import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CircularImageButton from '../../components/common/CircularImageButton';
import Styles from './style';
import BxManager from '../../Managers/BxAPIManager';
import WalletCollection from '../../components/screens/DashboardScreen/WalletCollection';
import CurrentPrice from '../../components/screens/DashboardScreen/CurrentPrice';
import Chart from '../../components/screens/DashboardScreen/Chart';
export default class DashboardScreen extends Component {
  state = { balances: null };
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

  fetchBalance() {
    BxManager.privateAPI.balance((isSuccess, balances) => {
      if (!isSuccess) {
        return;
      }
      this.setState({ balances: balances });
      console.log(this.state.balances);
    });
  }

  render() {
    if (!this.balances) {
      this.fetchBalance();
    }
    return (
      <View style={Styles.view}>
        <WalletCollection style={Styles.wallet} items={this.state.balances} />
        <View style={Styles.market}>
          <CurrentPrice style={Styles.currentPrice} />
          <Chart style={Styles.chart} />
        </View>
      </View>
    );
  }
}
