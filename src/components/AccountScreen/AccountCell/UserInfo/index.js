import React from 'react';
import { View, Text } from 'react-native';

import Style from './style';

const userInfo = (props) => {
  return (<View style={Style.view}>
    <Text style={Style.name}>{props.name}</Text>
    <Text style={Style.email}>{props.email}</Text>
  </View>)
};

export default userInfo;
