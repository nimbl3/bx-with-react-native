import React from 'react';
import { TouchableOpacity, Image, View, Button } from 'react-native';
import Styles from './styles';

const circularImageButton = (props) => (

  <TouchableOpacity
    style={Styles.button}
    onPress={() => {
      props.onPress();
    }}
  > 
    <Image style={Styles.button} source={{uri: props.url}} />
  </TouchableOpacity>
);


export default circularImageButton;