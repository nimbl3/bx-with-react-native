import publicAPI from './public';
import privateAPI from './private';

const hostname = 'https://bx.in.th/api/';

const endPoint = {
  public: {
    ticker: '',
  },
  private: {
    balance: 'balance/',
    order: 'order/',
  },
};

export default { publicAPI, privateAPI, hostname, endPoint };
