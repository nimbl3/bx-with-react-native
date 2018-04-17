import React from 'react';
import {
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Style from './style';

const button = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
    >
      <Text style={Style.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default button;
