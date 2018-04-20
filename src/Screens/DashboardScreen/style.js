import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  wallet: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 10,
  },
  market: {
    flexGrow: 4,
    flexShrink: 1,
    backgroundColor: 'green'
  }, 

  chart: {
    flexGrow: 5,
    backgroundColor: 'red'
  },
  currentPrice: {
    flexGrow: 2,
    backgroundColor: 'blue'
  }
});

export default styles;
