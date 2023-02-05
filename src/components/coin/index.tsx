import React from 'react';
import LayoutFlex from '../layout-flex';
import './style.scss';

const Coin = () => {
  return (
    <LayoutFlex flex="center" class="coin">
      <span>1000</span>
    </LayoutFlex>
  );
};

export default React.memo(Coin);
