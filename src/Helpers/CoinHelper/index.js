const infoFor = symbol => {
  const result = coinInfo[symbol]
  return Object.assign(result || {}, { url: imageURLPath + symbol + ".png" })
};

const imageURLPath = "https://d2v7vc3vnopnyy.cloudfront.net/img/coins/"

const coinInfo = {
  BTC: {
    name: 'Bitcoin',
    color: "#FF8E1C"
  },
  ETH: {
    name: 'Etherium',
    color: "#A7B0D4"
  },
  BCH: {
    name: 'Bitcoin Cash',
    color: '#63DF3F'
  },
  DAS: {
    name: 'Dash Coin',
    color: '#2188E6',
  },
  DOG: {
    name: 'Dogecoin',
    color: '#EFC535'
  },
  EVX: {
    name: 'Everex',
    color: '#5C84F0',
  },
  FTC: {
    name: 'Feathercoin',
    color: '#8D8D8D',
  },
  GNO: {
    name: 'Gnosis',
    color: "#00CBF5"
  },
  HYP: {
    name: 'Hyperstake',
    color: '#49AFD8'
  },
  LTC: {
    name: 'Lite Coin',
  },
  NMC: {
    name: 'Namecoin',
    color: "#A8BEFF"
  },
  OMG: {
    name: 'Omise GO',
    color: '#5777FF'
  },
  PND: {
    name: 'Panda Coin',
    color: '#B8BED9'
  },
  POW: {
    name: 'Power Token',
  },
  PPC: {
    name: 'Peercoin',
  },
  QRK: {
    name: 'Quantum Resistant Ledger',
  },
  REP: {
    name: 'Augur',
    color: '#CF57AC'
  },
  XCN: {
    name: 'Cryptonite',
  },
  XPM: {
    name: 'Primecoin',
  },
  XPY: {
    name: 'PayCoin',
    color: "#00C3F6"
  },
  XRP: {
    name: 'Ripple',
    color: '#0095D4'
  },
  XZC: {
    name: 'Zcoin',
    color: "#2BF263"
  },
  ZEC: {
    name: 'Zcash',
    color: "#F4B845",
  },
  THB: {
    name: 'Thai Baht',
    isPhysical: true
  },
};

const formatAmountFor = (symbol, amount) => {
  if (amount == 0) {
    return "0"
  }
  const currency = infoFor(symbol)
  if (currency.isPhysical) {
    return Number(amount).toFixed(2)
  } 
  return Number(amount).toFixed(8)

}

export default { infoFor, formatAmountFor };
