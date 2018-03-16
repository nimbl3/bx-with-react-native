import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native';


const formComponent = (props) => (
        <View style={ styles.formContainer }>
            <View style={ styles.textInputContainer }>
                <TextInput 
                    style={ styles.textField } 
                    placeholder={"API Key"}
                    onChangeText={ (text) => props.didFillKey(text) }
                />
                <TextInput 
                    style={ styles.textField } 
                    placeholder={ "API Secret" }
                    onChangeText={ (text) => props.didFillSecret(text) }
                />
            </View>
            <Button 
                title={ "Authenticate" } 
                onPress={ props.didSubmitHandler }
            />
        </View>
)

const styles = StyleSheet.create({
    textField: {
        height: 40,
        paddingLeft: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    textInputContainer: {

    },
    formContainer: {
        
    },
})

export default formComponent