const sha256 = require('sha256');
import AuthManager from '../../Managers/AuthManager';

const saveNonce = (nonce, completion) => {
  AsyncStorage.setItem('nonce', nonce);
  if (completion) {
    completion(savedNonce);
  }
};

const updateNonce = completion => {
  getNonce(current => {
    const newValue = current + 1;
    saveNonce(newValue, (savedNonce) => {
      if (completion) {
        completion(savedNonce);
      }
    });
  });
};

const getNonce = completion => {
  Promise.all([AsyncStorage.getItem('nonce')]).then(value => {
    const ensureNonce = value[0] == '' ? 0 : value[0];
    completion(ensureNonce);
    updateNonce();
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
        completion({
          key: key,
          nonce: nonce,
          secret: secret,
          signature: signagure,
        });
      }
    });
  });
};

export default { getQueryObject };
