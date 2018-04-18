const public = require("./public");
const public = require("./private");

const private = {};

const hostname = "https://bx.in.th/api/"

const endPoint = {
  public: {
    ticker: '',
  },
  private: {
    balance: 'balance/',
    order: 'order/',
  },
};
export default { public, private, hostname, endPoint };
