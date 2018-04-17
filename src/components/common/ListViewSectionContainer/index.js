import React from 'react'
import { View } from 'react-native'
import Style from './style'

const view = (props) => {
    const withTopMargin = props.withTopMargin || false
    const style = Style({withTopMargin: withTopMargin});
    return <View style={style.view}>{ props.children }</View>


}

export default view;