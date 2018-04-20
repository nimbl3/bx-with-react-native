import React from 'react';
import BxAPIManager from '../';
import BxEncryptor from '../../../Helpers/APIEncryptor';
import queryString from 'query-string';

const balance = completion => {
  fetchWithCredential(
    BxAPIManager.hostname + BxAPIManager.endPoint.private.balance,
    {},
    (isSuccess, responseObject) => {
      if (!isSuccess) {
        completion(false, null, responseObject.error);
        return;
      }

      balanceMapper(responseObject, balance => {
        completion(true, balance, null);
      });
    }
  );
};

const balanceMapper = (json, completion) => {
  const balances = [];
  const balanceObject = json.balance;
  const numberOfKeys = Object.keys(balanceObject).length;
  Object.keys(balanceObject).map(wallet => {
    const balance = { name: wallet };
    balances.push(Object.assign(balance, json.balance[wallet]));
    if (balances.length == numberOfKeys) {
      completion(balances);
    }
  });
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
    (isSuccess, responseObject) => {
      if (!isSuccess) {
        completion(true, responseObject, responseObject.error);
      }
    } 
  );
};

const fetchWithCredential = (url, body, completion) => {
  BxEncryptor.getQueryCredential(credential => {
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
      body: queryString.stringify(Object.assign(body, credential)),
    })
      .then(response => response.json())
      .then(responseJSON => {
        completion(responseJSON.success, responseJSON);
      });
  });
};

export default { buy, sell, balance };
