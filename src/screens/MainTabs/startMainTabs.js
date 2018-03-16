import React from 'react';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

 const startTabs = () => {
    Promise.all([
        Icon.getImageSource("ios-list-box-outline", 30),
        Icon.getImageSource("md-cash", 30)
    ]).then(source => {

        tabs = [{
            screen: "bx.marketScreen",
            label: "Market",
            icon: source[0]
        }]

        tabs.push({screen: isLoggedIn ? "bx.balanceScreen" : "bx.authScreen", label: "Balance", icon: source[0]})

        Navigation.startTabBasedApp({
            tabs: tabs
        })
    })
};

export default startTabs;