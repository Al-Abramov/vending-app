import React from 'react';
import LayoutFlex from '../../../../../layout-flex';
import GetChange from '../get-change';
import SetMoney from '../set-money';
import { PaymentProps } from './payment.interface';
import './style.scss';

const Payment: React.FC<PaymentProps> = ({ getChange }) => {
  return (
    <LayoutFlex flex="start" class="payment">
      <GetChange getChange={getChange} />
      <SetMoney />
    </LayoutFlex>
  );
};

export default React.memo(Payment);
