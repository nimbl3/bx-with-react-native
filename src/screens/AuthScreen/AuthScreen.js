import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button, AsyncStorage } from 'react-native';

import AuthenticationForm from './AuthForm'
import BalanceScreen from '../BalanceScreen/BalanceScreen'
export default class AuthScreen extends Component {

    componentDidMount() {
        this.getAPIFromPersistent()
    }

    state = {
        key: "",
        secret: "",
        isLoggedIn: false
    }

    saveAPI = () => {
        AsyncStorage.setItem('apiKey', this.state.key)
        AsyncStorage.setItem('apiSecret', this.state.secret)
    }

    getAPIFromPersistent = () => {
        Promise.all([
            AsyncStorage.getItem('apiKey'),
            AsyncStorage.getItem('apiSecret')
        ]).then( (value) => {
            this.setState({ key: value[0], secret: value[1] })
            if (value[0].length == 12 && value[1].length == 12) {
                this.setState({ isLoggedIn: true })
            }
        })
    }
    
    secretDidChange = (secret) => {
        this.setState({ secret: secret })
    }

    keyDidChange = (key) => {
        this.setState({ key: key })
    }

    buttonDidPressHandler = () => {
        if (this.state.key.length != 12 && this.state.secret != 12) {
            alert("invalid api key or secret")
            return;
        }
        this.saveAPI()
        this.setState({ isLoggedIn: true })
        alert("api saved")
    }

    render() {
        if ( !this.state.isLoggedIn ) {
            return (
                <View style={ styles.view }> 
                    <AuthenticationForm 
                        didFillKey={ (text) => this.keyDidChange(text) }
                        didFillSecret={ (text) => this.secretDidChange(text) }
                        didSubmitHandler={ this.buttonDidPressHandler  }
                    />
                </View>
                )
        } else {
            return <BalanceScreen onPressHandler={ this.a }/>
        }
    }

    a = () => {
        this.setState({ 
            key: "",
            secret: "",
            isLoggedIn: false
         }); 
         alert("logged out")
    }
};

const styles = StyleSheet.create({
    view: {
        height: '100%',
        backgroundColor: '#eee',
        flexDirection: 'column',
        padding: 10
    },
});