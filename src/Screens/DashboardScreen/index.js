import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CircularImageButton from '../../components/common/CircularImageButton';
import Styles from './style';
import BxManager from '../../Managers/BxAPIManager';
import WalletCollection from '../../components/screens/DashboardScreen/WalletCollection';
import CurrentPrice from '../../components/screens/DashboardScreen/CurrentPrice';
import Chart from '../../components/screens/DashboardScreen/Chart';
export default class DashboardScreen extends Component {
  state = {
    balances: [
    ]
  };
  static navigationOptions = ({ navigate, navigation }) => ({
    title: 'Dashboard',
    headerStyle: {
      backgroundColor: 'white',
      borderBottomWidth: 0,

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
    BxManager.privateAPI.balance((isSuccess, balances, error) => {
      if (!isSuccess) {
        alert(error)
        return;
      }
      this.setState({ balances: balances });
    });
  }

  componentDidMount() {
    if (!this.state.balances || this.state.balances.length == 0) {
      this.fetchBalance();
    }
  }

  render() {

    console.log("sent:", this.state.balances)
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
