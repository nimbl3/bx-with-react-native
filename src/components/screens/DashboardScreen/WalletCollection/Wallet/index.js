import React from 'react';
import { View, Text, Image } from 'react-native';
import Style from './styles';
import view from '../../../../common/ListViewSectionContainer';

const component = (props) => {
  return (
    <View style={Style.view} {...props}>
      <View style={Style.leftContainer}>
        <Image />
        <Text>{props.name}</Text>
      </View>
      <View style={Style.rightContainer}>
        <Text>Wallet</Text>
        <Text>{props.amount}</Text>
      </View>
    </View>
  );
};
export default component;
