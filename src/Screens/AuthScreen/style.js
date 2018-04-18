import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    view: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#4198FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '70%',
    },
    image: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: -130,
        left: '50%',
        marginLeft: -50,
    },

});

export default styles;
