import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Style from './style';

const cell = props => {
  const withTopMargin = props.withTopMargin || false;
  return (
    <TouchableOpacity style={Style.touchable}>
      <View style={Style.contentView}>
        <Text style={Style.text}>{props.text}</Text>
        <Ionicons name="ios-arrow-forward" size={21} color={'#AFB8C0'} />
      </View>
    </TouchableOpacity>
  );
};

export default cell;
