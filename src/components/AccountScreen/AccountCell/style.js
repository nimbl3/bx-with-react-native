import React from 'react';
import { StyleSheet } from 'react-native';

const height = 118;
const imageHeight = 70

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    height: height,
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 29,
    paddingRight: 29,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DBDBE0",
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {

  },
  image: {
    width: imageHeight,
    height: imageHeight,
    borderRadius: imageHeight / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 19
  },
});

export default styles;
