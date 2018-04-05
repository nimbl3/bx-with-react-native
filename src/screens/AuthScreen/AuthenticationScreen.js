import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AuthenticationForm from './AuthenticationForm';
import BxLogo from '../../assets/images/bx_logo.png';

export default class AuthenticationScreen extends Component {
  state = {
    apiKey: '',
    apiSecret: '',
  };

  submitHandler() {}

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.container}>
          <Image style={styles.image} source={BxLogo} />
          <AuthenticationForm
            didSubmitHandler={() => this.submitHandler()}
            onKeyChange={key => {
              this.setState({ apiKey: key });
            }}
            onSecretChange={secret => {
              this.setState({ apiSecret: secret });
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#4198FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '70%',
  },
  image: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: -130,
    left: '50%',
    marginLeft: -50,
  },
});
