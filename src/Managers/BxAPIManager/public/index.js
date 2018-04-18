import React from 'react'
import BxAPIManager from '../'

const ticker = (completion) => {
    fetch(BxAPIManager.hostname + BxAPIManager.endPoint.public.ticker)
    .then((response) => response.json())
    .then((responseJSON) => {
        completion(responseJSON)
        return tickerMapper(responseJSON)
    });
}

const tickerMapper = (json) => {
    const numberOfKeys = Object.keys(json).length
    const result = []
    Object.keys(json).map((key) => {
        result.push(json[key])
        if (numberOfKeys == result.length) {
            return result;
        }
    })
}

export default { ticker }