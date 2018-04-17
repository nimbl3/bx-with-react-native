import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  touchable: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    height: 71,
    borderBottomColor: "#DBDBE0",
    borderBottomWidth: 0.5,
  },
  contentView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 19,
    paddingRight: 19,

  },
  text: {
    fontFamily: 'BrixSansRegular',
    fontSize: 17,
    color: "black",
  },
});
export default styles;
