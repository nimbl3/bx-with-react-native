import React from 'react';
import { StyleSheet } from 'react-native';

const styles = (props) => StyleSheet.create({
    touchable: {
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        height: 71,
        borderBottomColor: "#DBDBE0",
        borderBottomWidth: 0.5,
    },
    contentView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 19,
        paddingRight: 19,

    },
    text: {
        fontFamily: 'BrixSansRegular',
        fontSize: 17,
        color: props.textColor,
    },
});
export default styles;
