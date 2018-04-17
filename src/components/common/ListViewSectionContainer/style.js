import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  withTopMargin: {
    width: '100%',
    marginTop: 27,
    alignSelf: 'baseline',
    flexDirection: 'column',    
    alignItems: 'flex-start',
    borderColor: "#DBDBE0",
    borderWidth: 0,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  withoutTopMargin: {
    width: '100%',
    alignSelf: 'baseline',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderWidth: 0,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },

});

export default styles;
