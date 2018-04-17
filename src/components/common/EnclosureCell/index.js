import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { View, Text, TouchableOpacity } from 'react-native';

const view = props => {
  return (
    <TouchableOpacity>
      <View style={}>
        <Text>{props.text}</Text>
        <Ionicons name={"ion-chevron-right"}/>
      </View>
    </TouchableOpacity>
  );
};

export default view;
