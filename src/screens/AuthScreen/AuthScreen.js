import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

import AuthenticationForm from './AuthenticationForm'

export default class AuthScreen extends Component {

    state = {
        key: "",
        secret: "",
    }

    secretDidChange = (secret) => {
        alert(secret)
    }

    keyDidChange = (key) => {
        alert(key)
    }

    buttonDidPressHandler = () => {

    }

    render() {
        return (
        <View style={ styles.view }> 
            <AuthenticationForm 
                didFillKey={ (text) => this.keyDidChange(text) }
                didFillSecret={ (text) => this.secretDidChange(text) }
                didSubmitHandler={ this.buttonDidPressHandler  }
            />
        </View>
        )
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