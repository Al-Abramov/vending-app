import React from 'react';
import { CoinProps } from './coin.interface';
import './style.scss';

const Coin: React.FC<CoinProps> = ({ value, clickCoin }) => {
  const getValue = () => {
    clickCoin(value);
  };

  return (
    <div className="coin center" onClick={getValue}>
      <span>{value}</span>
    </div>
  );
};

export default React.memo(Coin);
