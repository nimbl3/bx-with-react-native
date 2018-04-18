import React from 'react';
import { Image, View } from 'react-native';
import AuthenticationForm from '../../components/screens/AuthenticationScreen/AuthenticationFrom/';
import BxLogo from '../../assets/images/bx_logo.png';
import Style from './style'

import AuthManager from '../../Managers/AuthManager'

class AuthenticationScreen extends React.Component {
  state = {
    apiKey: '',
    apiSecret: '',
  };

  render() {
    return (
      <View style={Style.view}>
        <View style={Style.container}>
          <Image style={Style.image} source={BxLogo} />
          <AuthenticationForm
            didSubmitHandler={() => {
              AuthManager.saveAPI(
                this.state.apiKey,
                this.state.apiSecret,
                isValid => {
                  this.props.didAuthenCompletion(isValid);
                }
              );
            }}
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


export default AuthenticationScreen;
