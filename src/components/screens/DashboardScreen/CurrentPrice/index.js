import React from 'react';
import { View, Text } from 'react-native';

import Styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons'

const component = props => {
  return (<View {...props} style={props.style} >
    <View style={Styles.container}>
      <View style={Styles.leftContainer}>
        <Ionicons name={"md-arrow-dropup"} size={25} />
        <Text style={Styles.changeText}>8,453.00</Text>
      </View>
      <View style={Styles.rightContainer}>
        <Text style={Styles.currencyText}>THB</Text>
        <Text style={Styles.currentPriceText}>128,300.00</Text>
      </View>
    </View>
  </View>);
};

export default component;
