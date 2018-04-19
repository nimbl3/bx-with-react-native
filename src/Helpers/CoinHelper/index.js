const infoFor = symbol => {
  return coinInfo[symbol.toUpperCase()];
};

const coinInfo = {
  crypto: {
    BTC: {
      name: 'Bitcoin',
    },
    ETH: {
      name: 'Etherium',
    },
    BCH: {
      name: 'Bitcoin Cash',
    },
    DAS: {
      name: 'Dash Coin',
    },
    DOG: {
      name: 'Dogecoin',
    },
    EVX: {
      name: 'Everex',
    },
    FTC: {
      name: 'Feathercoin',
    },
    GNO: {
      name: 'Gnosis',
    },
    HYP: {
      name: 'Hyperstake',
    },
    LTC: {
      name: 'Lite Coin',
    },
    NMC: {
      name: 'Namecoin',
    },
    OMG: {
      name: 'Omise GO',
    },
    PND: {
      name: 'Panda Coin',
    },
    POW: {
      name: 'Power Token',
    },
    PPC: {
      name: 'Peercoin',
    },
    QRL: {
      name: 'Quantum Resistant Ledger',
    },
    REP: {
      name: 'Augur',
    },
    XCN: {
      name: 'Cryptonite',
    },
    XPM: {
      name: 'Primecoin',
    },
    XPY: {
      name: 'PayCoin',
    },
    XRP: {
      name: 'Ripple',
    },
    XZC: {
      name: 'Zcoin',
    },
    ZEC: {
      name: 'Zcash',
    },
  },
  physical: {
    THB: {
      name: 'Thai Baht',
    },
  },
};

export default { infoFor };
