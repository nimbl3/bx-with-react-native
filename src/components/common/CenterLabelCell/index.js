import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Style from './style';

const cell = props => {

    const style = Style({textColor: "#FC2765"});
    return (
        <TouchableOpacity style={style.touchable}>
            <View style={style.contentView}>
                <Text style={style.text}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default cell;
