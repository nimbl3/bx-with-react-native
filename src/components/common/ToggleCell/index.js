import React from 'react';
import { View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Style from './style';

const cell = props => {
  const withTopMargin = props.withTopMargin || false;
  return (
    <View style={Style.contentView}>
      <Text style={Style.text}>{props.text}</Text>
      <Switch
        onValueChange={value => {
          props.onValueChange(value);
        }}
        value={props.value}
      />
    </View>
  );
};

export default cell;
