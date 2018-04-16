import { AsyncStorage } from 'react-native';

export default class AuthManager {
  static saveAPI(key, secret, completion) {
    if (key.length != 12 && secret.length != 12) {
      completion(false);
      return;
    }
    AsyncStorage.setItem('apiKey', key);
    AsyncStorage.setItem('apiSecret', secret);
    completion(true);
  }

  static getAPIFromPersistent(completion) {
    Promise.all([
      AsyncStorage.getItem('apiKey'),
      AsyncStorage.getItem('apiSecret'),
    ]).then(value => {
      key = value[0];
      secret = value[1];
      if (key !== null && secret !== null) {
        if (key.length == 12 && secret.length == 12) {
          completion(key, secret, true);
          return;
        } else {
          completion(null, null, false);
          return;
        }
      } else {
        completion(null, null, false);
        return;
      }
    });
  }
}
