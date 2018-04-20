import { StyleSheet } from 'react-native';

const styles = (props) => StyleSheet.create({
  view: {
    backgroundColor: props.backgroundColor || 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 4,
    padding: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  currencyIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  currencyLabel: {
    fontFamily: "BrixSansRegular",
    fontSize: 15,
    color: "white",
  },
  rightContainer: {
    alignItems: 'flex-end'
  },
  walletLabel: {
    fontFamily: "BrixSansRegular",
    fontSize: 10,
    color: "white"
  },
  amountLabel: {
    fontFamily: "BrixSansRegular",
    fontSize: 18,
    color: "white"

  },
});

export default styles;