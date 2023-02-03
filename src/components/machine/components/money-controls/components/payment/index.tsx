import React from 'react';
import LayoutFlex from '../../../../../layout-flex';
import GetChange from '../get-change';
import SetMoney from '../set-money';
import './style.scss';

const Payment = () => {
  return (
    <LayoutFlex flex="start" class="payment">
      <GetChange />
      <SetMoney />
    </LayoutFlex>
  );
};

export default React.memo(Payment);
