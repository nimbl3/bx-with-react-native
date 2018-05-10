import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  wallet: {
    flexShrink: 0,
  },
  market: {
    flexGrow: 1,
    flexShrink: 1,
  },
  currentPrice: {
    flexGrow: 1,
  },
  chart: {
    flexGrow: 6,
    backgroundColor: 'red'
  },
});

export default styles;
