import React from 'react';

const AppContext = React.createContext({
  state: {
    yollar: 0,
    wallet: 1000,
  },
  setYollar: (yollar: number) => {},
  setWallet: (wallet: number) => {},
});

export default AppContext;
