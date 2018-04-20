import React from 'react';
import { View } from 'react-native';
import Style from './style';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import BxAPI from '../../../../Managers/BxAPIManager';
import Wallet from '../WalletCollection/Wallet';
import ScreenDimension from '../../../../Helpers/ScreenDimension'

export default class WalletCollection extends React.Component {

  state = {
    activeSlide: 0
  }
  constructor(props) {
    super(props);
  }

  _renderItem({ item }) {
    return <Wallet info={item} />;
  }

  render() {
    const itemWidth = ScreenDimension.width * 200 / 375;
    const itemHeight = itemWidth * 64 / 200;
    const { activeSlide } = this.state;
    const entries = this.props.items;
    return (
      <View style={Style.view}>
        <Carousel layout={"default"}
          data={this.props.items}
          renderItem={this._renderItem}
          sliderWidth={ScreenDimension.width}
          itemWidth={itemWidth}
          itemHeight={itemHeight}
          currentIndex={0}
          inactiveSlideScale={0.85}
          onSnapToItem={(index) => {
            const activeSlide = Math.floor(index / 5)
            this.setState({ activeSlide: activeSlide })
          }
          }
        />
        <Pagination
          dotsLength={5}
          activeDotIndex={activeSlide}
          
          containerStyle={{ backgroundColor: 'transparent' }}
          dotStyle={{
            width: 6,
            height: 6,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: '#6497FC'
          }}
          inactiveDotStyle={{
            width: 6,
            height: 6,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: '#DDEAFE'
          }}
          containerStyle={Style.indicatorContainer}
          inactiveDotScale={1}
        />
      </View>
    );
  }
}
