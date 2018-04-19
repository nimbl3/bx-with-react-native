import React from 'react';
import BxAPIManager from '../';
import BxEncryptor from '../../../Helpers/APIEncryptor';

const balance = completion => {
  fetch(BxAPIManager.hostname + BxAPIManager.endPoint.private.balance)
    .then(response => response.json())
    .then(responseJSON => {});
};

const buy = (pairing, secondaryAmount, rate, completion) => {
  order(true, secondaryAmount, () => {
    completion();
  });
};

const sell = (pairing, primaryAmount, rate, completion) => {
  order(false, primaryAmount, () => {
    completion();
  });
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
        if (!responseJSON.success) {
          completion(null);
          return;
        }
        completion(responseJSON);
      });
  });
};

export default { buy, sell, balance };
