const sha256 = require('sha256');
import {AsyncStorage} from 'react-native'
import AuthManager from '../../Managers/AuthManager';

const saveNonce = (nonce, completion) => {
  AsyncStorage.setItem('nonce', `${nonce}`);
  if (completion) {
    completion(nonce);
  }
};

const updateNonce = (current, completion) => {
  const newValue = Number(current) + 1;
  saveNonce(newValue, (savedNonce) => {
    if (completion) {
      completion(savedNonce);
    }
  });
};

const getNonce = completion => {
  Promise.all([AsyncStorage.getItem('nonce')]).then(value => {
    const ensureNonce = value[0] == '' ? 0 : value[0];
    completion(ensureNonce);
    updateNonce(ensureNonce, null);
  });
};

const getQueryCredential = completion => {
  AuthManager.getAPIFromPersistent((key, secret, isValid) => {
    if (!isValid) {
      if (completion) {
        completion(null);
      }
      return;
    }
    getNonce(nonce => {
      const signagure = sha256(`${key}${nonce}${secret}`);
      if (completion) {
        const response = {
          key: key,
          nonce: nonce,
          signature: signagure,
        }
        completion(response);
      }
    });
  });
};

export default { getQueryCredential };
