import React from 'react';
import { View, Text, Image } from 'react-native';
import Style from './styles';
import view from '../../../../common/ListViewSectionContainer';
import CoinInfo from '../../../../../Helpers/CoinHelper'

const component = (props) => {

  const info = CoinInfo.infoFor(props.info.name)
  const Styles = Style({ backgroundColor: info.color })

  return (
    <View style={Styles.view}>
      <View style={Styles.leftContainer}>
        <Image style={Styles.currencyIcon} source={{ uri: info.url || null }} />
        <Text numberOfLines={2} style={Styles.currencyLabel}>{info.name}</Text>
      </View>
      <View style={Styles.rightContainer}>
        <Text  style={Styles.walletLabel}>Wallet</Text>
        <Text  style={Styles.amountLabel}>{CoinInfo.formatAmountFor(props.info.name, props.info.available)}</Text>
      </View>
    </View>
  );
};
export default component;
