import React from 'react';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

 const startTabs = () => {
    Promise.all([
        Icon.getImageSource("md-cash", 30),
        Icon.getImageSource("md-list", 30)
    ]).then(source => {
        Navigation.startTabBasedApp({
            tabs:[{
                screen: "bx.marketScreen",
                label: "Market",
                icon: source[0]
            },{
                screen: "bx.authScreen",
                label: "Completed",
                icon: source[1]
            }]
        })
    })
};

export default startTabs;