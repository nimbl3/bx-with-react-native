import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';

 const startTabs = () => {
    Navigation.startTabBasedApp({
        tabs:[{
            screen: "bx.marketScreen",
            label: "Market",
        },{
            screen: "bx.completedOrderScreen",
            label: "Completed",
        }]
    })
};

export default startTabs;