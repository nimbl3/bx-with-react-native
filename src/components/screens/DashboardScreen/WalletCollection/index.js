import React from 'react';
import { View } from 'react-native';
import Style from './style';
import Carousel from 'react-native-snap-carousel';
import BxAPI from '../../../../Managers/BxAPIManager';
import Wallet from '../WalletCollection/Wallet';
import ScreenDimension from '../../../../Helpers/ScreenDimension'

export default class WalletCollection extends React.Component {

  constructor(props) {
    super(props);
  }

  _renderItem({ item }) {
    return <Wallet info={item} />;
  }

  render() {
    const itemWidth = ScreenDimension.width * 200 / 375;
    const itemHeight = itemWidth * 100 / 200;
    console.log("got:", this.props.items)
    return (
      <Carousel layout={"default"}
        data={this.props.items}
        renderItem={this._renderItem}
        style={Style.view}
        sliderWidth={ScreenDimension.width}
        itemWidth={itemWidth}
        itemHeight={itemHeight}
        loop={true}
        enableMomentum={true}

      />
    );
  }
}
