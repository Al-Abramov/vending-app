import React from 'react';
import { coinsValue } from '../../../../constant/wallet-constants';
import Coin from '../../../coin';
import LayoutFlex from '../../../layout-flex';
import { CoinsProps } from './coins.interface';
import './style.scss';

const Coins: React.FC<CoinsProps> = ({ clickCoin }) => {
  return (
    <LayoutFlex flex="between" class="coins">
      {coinsValue.map((value) => (
        <Coin key={value} value={value} clickCoin={clickCoin} />
      ))}
    </LayoutFlex>
  );
};

export default React.memo(Coins);
