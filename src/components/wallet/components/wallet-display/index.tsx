import React from 'react';
import { useAppSelector } from '../../../../store';
import { getUserMoney } from '../../../../store/user-slice/selectors';
import Display from '../../../display';
import LayoutFlex from '../../../layout-flex';
import './style.scss';

const WalletDisplay = () => {
  const userMoney = useAppSelector(getUserMoney);

  return (
    <LayoutFlex flex="start" class="wallet__display">
      <Display addClass="wallet__display_width" info={String(userMoney)} />
    </LayoutFlex>
  );
};

export default WalletDisplay;
