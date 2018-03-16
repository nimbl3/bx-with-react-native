import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class BalanceScreen extends Component {
    render() {
        return (
        <View style={styles.view} > 
            <Text> BalanceScreen </Text>
            <Button title={"signOut"} onPress={() => this.props.onPressHandler()}/>
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
    },})
