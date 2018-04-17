import React from 'react';
import { StyleSheet } from 'react-native';

const styles = (props) => StyleSheet.create({
    view: {
        width: '100%',
        marginTop: props.withTopMargin ? 27 : 0,

    }

});

export default styles;
