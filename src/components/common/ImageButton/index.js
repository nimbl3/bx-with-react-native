import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

const component = (props) => {
    return (
        <TouchableOpacity>
            <Image
                source={props.source}
                style={
                    {
                        width: props.width,
                        height: props.height,
                        backgroundColor: props.backgroundColor || "transparent"
                    }
                }
            />
        </TouchableOpacity>
    )
}

export default component;