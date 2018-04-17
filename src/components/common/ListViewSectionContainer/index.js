import React from 'react'
import { View } from 'react-native'
import Style from './style'

const view = (props) => {
    const withTopMargin = props.withTopMargin || false
    if (withTopMargin) {
        return <View style={Style.withTopMargin}>{ props.children }</View>
    }
    return <View style={Style.withoutTopMargin}>{ props.children }</View>

}

export default view;