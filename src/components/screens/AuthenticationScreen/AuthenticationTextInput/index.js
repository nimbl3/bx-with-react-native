import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  TextInput,
  Button,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class AuthenticationTextInput extends Component {
  constructor(props) {
    super(props);
    this.withSubmitButton = false;
    if (props.withSubmitButton == true) {
      this.withSubmitButton = true;
    }
    this.styles = this.createStyle(props);
    if (this.withSubmitButton) {
      this.onPressHandler = props.didSubmitHandler
    }
  }

  createStyle(props) {
    let height = props.height;
    let minimumHeight = 50;
    let heightValue = height < minimumHeight || height == undefined ? minimumHeight : props.height;
    this.heightValue = heightValue;
    let submitButtonMargin = 5;
    let buttonWidth = heightValue - submitButtonMargin * 2;
    let borderRadius = heightValue / 2;
    let textInputPadding = submitButtonMargin
    let textInputPaddingRight = !this.withSubmitButton ? borderRadius : 0

    return StyleSheet.create({
      container: {
        top: heightValue / 5,
        height: heightValue,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: borderRadius,
        width: '100%',
        marginTop: heightValue / 5,
      },
      textInput: {
        padding: 5,
        paddingLeft: borderRadius,
        paddingRight: textInputPaddingRight,
        height: heightValue,
        color: 'white',
        flex: 1,
        fontSize: heightValue / 3,
        fontFamily: 'BrixSansRegular',
      },
      button: {
        width: buttonWidth,
        borderRadius: heightValue / 2,
        backgroundColor: 'white',
        margin: submitButtonMargin,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
  }

  render() {
    if (this.withSubmitButton) {
      return (
        <View style={this.styles.container}>
          <TextInput
            style={this.styles.textInput}
            placeholderTextColor="white"
            selectionColor="white"
            underlineColorAndroid="transparent"
            autoCorrect={false}
            placeholder={this.props.placeholder}
            onChangeText={ (text) => { this.props.onChangeText(text) } }
          />
          <TouchableOpacity style={this.styles.button} onPress={ this.onPressHandler }>
            <View style={{ backgroundColor: 'white' }}>
              <Icon
                name="md-arrow-round-forward"
                size={this.heightValue / 2.5}
                color="#4198FF"
              />
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={this.styles.container}>
        <TextInput
          style={this.styles.textInput}
          placeholderTextColor="white"
          selectionColor="white"
          underlineColorAndroid="transparent"
          autoCorrect={false}
          placeholder={this.props.placeholder}
          onChangeText={ (text) => { this.props.onChangeText(text) } }
        />
      </View>
    );
  }
}
