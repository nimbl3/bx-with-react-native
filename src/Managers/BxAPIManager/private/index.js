import React from 'react';
import BxAPIManager from '../';

const order = (isBuy, amount, completion) => {
  fetch(BxAPIManager.hostname + BxAPIManager.endPoint.private.order)
    .then(response => response.json())
    .then(responseJSON => {});
};

const buy = (secondaryAmount, completion) => {
  order(true, secondaryAmount, () => {
      completion()
  });
};

const sell = (primaryAmount, completion) => {
  order(false, primaryAmount, () => {
      completion()
  });
};

const balance = completion => {
  fetch(BxAPIManager.hostname + BxAPIManager.endPoint.private.balance)
    .then(response => response.json())
    .then(responseJSON => {});
};

export default { buy, sell, balance };
