import React from 'react';
import { View } from 'react-native';
import Style from './style';
import Carousel from 'react-native-snap-carousel';
import BxAPI from '../../../../Managers/BxAPIManager';
import Wallet from '../WalletCollection/Wallet';

export default class WalletCollection extends React.Component {
  state = { balances: [] };
  constructor(props) {
    super(props);
    this.props = props;
  }

  _renderItem({ item }) {
    return <Wallet wallet={item} />;
  }


  render() {
    return (
      <Carousel data={this.state.balances} renderItem={this._renderItem} />
    );
  }
}
