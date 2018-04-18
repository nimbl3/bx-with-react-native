import { StyleSheet } from 'react-native'

const buttonWidth = require('Dimensions').get('window').width / 10;

const styles = StyleSheet.create({
  button: {
    width: buttonWidth,
    height: buttonWidth,
    borderRadius: buttonWidth / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:  - buttonWidth / 2,
  },
});

export default styles;
