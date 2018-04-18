import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthenticationTextInput from './AuthenticationTextInput';

export default class AuthenticationForm extends Component {
  constructor(props) {
    super(props);
    this.styles = this.createStyle(props);
  }

  createStyle(props) {
    this.height = 50;

    return StyleSheet.create({
      formContainer: {
        flexDirection: 'column',
      },
      loginText: {
        fontFamily: 'BrixSansMedium',
        fontSize: this.height / 3,
        color: 'white',
        textAlign: 'center',
      },
    });
  }
  render() {
    return (
      <View style={this.styles.formContainer}>
        <Text style={this.styles.loginText}>Login</Text>
        <AuthenticationTextInput
          height={this.height}
          placeholder={'API Key'}
          onChangeText={key => {
            this.props.onKeyChange(key);
          }}
        />
        <AuthenticationTextInput
          height={this.height}
          placeholder={'API Secret'}
          withSubmitButton={true}
          didSubmitHandler={this.props.didSubmitHandler}
          onChangeText={secret => {
            this.props.onSecretChange(secret);
          }}
        />
      </View>
    );
  }
}
