import React from 'react'
import BxAPIManager from '../'

const ticker = (completion) => {
    fetch(BxAPIManager.hostname + BxAPIManager.endPoint.public.ticker)
    .then((response) => response.json())
    .then((responseJSON) => {
        tickerMapper(responseJSON, (results) => {
            completion(true, results)
        }) 
    });
}

const tickerMapper = (json, completion) => {
    const numberOfKeys = Object.keys(json).length
    const results = []
    Object.keys(json).map((key) => {
        results.push(json[key])
        if (numberOfKeys == results.length) {
            completion(results)
        }
    })
}

export default { ticker }