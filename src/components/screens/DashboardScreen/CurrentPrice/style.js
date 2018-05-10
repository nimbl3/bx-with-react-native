import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12
  },
  leftContainer: {
    alignItems: "center",
    flexDirection: "row",
    flexGrow: 1
  },
  changeText: {
    marginLeft: 10
  },
  rightContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  currencyText: {
    fontSize: 13,
    fontFamily: "BrixSansRegular",
    marginTop: 5
  },
  currentPriceText: {
    fontSize: 27,
    fontFamily: "BrixSansMedium",
    marginTop: 5
  }
});
export default styles;
