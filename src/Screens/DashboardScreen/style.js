import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  wallet: {
    flexGrow: 4,
    flexShrink: 0,
  },
  market: {
    flexGrow: 1,
    // flexShrink: 1,
    backgroundColor: 'green'
  },
  currentPrice: {
    // flexGrow: 2,
    backgroundColor: 'blue'
  },
  chart: {
    // flexGrow: 5,
    backgroundColor: 'red'
  },
});

export default styles;
