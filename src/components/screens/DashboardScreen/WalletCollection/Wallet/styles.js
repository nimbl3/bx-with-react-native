import { StyleSheet } from 'react-native';
import ScreenDimension from '../../../../../Helpers/ScreenDimension'

const itemWidth = ScreenDimension.width * 200 / 375;
const itemHeight = itemWidth * 64 / 200;

const styles = (props) => StyleSheet.create({
  view: {
    backgroundColor: props.backgroundColor || 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,

    height: itemHeight,
    width: itemWidth
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
    alignItems: 'flex-end',
    justifyContent: 'center'
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