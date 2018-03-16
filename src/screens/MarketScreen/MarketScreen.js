import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';
import Item from './Item';

const styles = StyleSheet.create({
    container: { backgroundColor: '#F0F0F0' },
    itemContainer: {
        backgroundColor: 'white',
        padding: 4,
        elevation: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
    priceContainer: {
        alignItems: "flex-end"
    },
    textCurrency: {
        fontSize: 20,
        color: '#545454',
        fontWeight: 'bold',
    },
    textPercentChange: {
        fontSize: 14,
    },
    textLastPrice: {
        fontSize: 16,
    },
    textHigh: {
        color: 'green',
    },
    textDown: {
        color: 'red',
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
})

export default class MarketScreen extends Component {
    state = {
        dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 })
    };

    constructor() {
        super();
        this.mapDataToArray = this.mapDataToArray.bind(this);
    }


    componentDidMount() {
        this.fetchData();
    }

    mapDataToArray(rawData) {
        const data = [];

        Object.keys(rawData).forEach((key) => {
            data.push(rawData[key])
        })

        return data;
    }

    fetchData() {
        fetch("https://bx.in.th/api/")
            .then((response) => response.json())
            .then((responseJson) => { return this.mapDataToArray(responseJson) })
            .then((data) => { this.setState({ dataSource: this.state.dataSource.cloneWithRows(data) }) })
            .catch((error) => { console.error(error); })
    }

    _renderRow(rowData) {
        const { primary_currency, secondary_currency, last_price, change } = rowData
        var isPriceHigh = change >= 0.0
        var isThaiCurrency = primary_currency === "THB"
        var price = isThaiCurrency ? last_price.toFixed(2) : last_price.toFixed(8)
        // {last_price.toLocaleString(undefined, { maximumFractionDigits: 9 })}
        return <View style={styles.itemContainer}>
            <Text style={styles.textCurrency}>
                {primary_currency} - {secondary_currency}
            </Text>
            <View style={styles.priceContainer}>
                <Text style={[styles.textLastPrice, isPriceHigh ? styles.textHigh : styles.textDown]}>
                    {price}
                </Text>
                <Text style={[styles.textPercentChange, isPriceHigh ? styles.textHigh : styles.textDown]}>
                    {change} %
                    </Text>
            </View>
        </View>
    }

    _renderSeparator(sectionId, rowId) {
        return <View style={styles.separator}></View>
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this._renderRow(rowData)}
                    renderSeparator={(sectionId, rowId) => this._renderSeparator(sectionId, rowId)}
                />
            </View>
        )
    }
};

