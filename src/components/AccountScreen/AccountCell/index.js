import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import UserInfo from '../UserInfo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Style from './style';

const cell = props => {
  return (
    <TouchableOpacity style={Style.view}>
      <View style={Style.leftContainer}>
        <Image source={{ uri: props.userInfo.imageURL }} style={Style.image} />
        <UserInfo name={props.userInfo.name} email={props.userInfo.email} />
      </View>
      <View>
        <Ionicons name="ios-arrow-forward" size={21} color={'#AFB8C0'} />
      </View>
    </TouchableOpacity>
  );
};

export default cell;
