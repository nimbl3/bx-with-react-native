import React from 'react';
import BxAPIManager from '../';
import BxEncryptor from '../../../Helpers/APIEncryptor';
import queryString from 'query-string';

const balance = completion => {
  fetchWithCredential(
    BxAPIManager.hostname + BxAPIManager.endPoint.private.balance,
    {},
    completion
  );
};

const buy = (pairing, secondaryAmount, rate, completion) => {
  order(pairing, true, secondaryAmount, rate, completion);
};

const sell = (pairing, primaryAmount, rate, completion) => {
  order(pairing, true, primaryAmount, rate, completion);
};

const order = (pairing, isBuy, amount, rate, completion) => {
  fetchWithCredential(
    BxAPIManager.hostname + BxAPIManager.endPoint.private.order,
    {
      pairing: pairing,
      type: isBuy ? 'buy' : 'sell',
      amount: amount,
      rate: rate,
    },
    completion
  );
};

const fetchWithCredential = (url, body, completion) => {
  BxEncryptor.getQueryCredential(credential => {
    bodyWithCredential = Object.assign(body, credential);

    let string = queryString.stringify(bodyWithCredential)
    console.log(string)
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
      body: string,
    })
      .then(response => response.json())
      .then(responseJSON => {
        completion(responseJSON.success, responseJSON);
      });
  });
};

export default { buy, sell, balance };
