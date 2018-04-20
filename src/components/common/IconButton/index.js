import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const component = (props) => {
    console.log(props)
    return (
        <TouchableOpacity             style={props.style}
        onPress={() => { props.onPress() }
         }>
            <Ionicons
                name={props.name}
                size={props.size} 
                color={'black'}
            />

        </TouchableOpacity>
    )
}

export default component;