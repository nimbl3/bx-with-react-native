import React from 'react';
import BxAPIManager from '../';
import BxEncryptor from '../../../Helpers/APIEncryptor';

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
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(Object.assign(body, credential)),
    })
      .then(response => response.json())
      .then(responseJSON => {
        completion(responseJSON.success, responseJSON);
      });
  });
};

export default { buy, sell, balance };
