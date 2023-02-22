import React from 'react';
import { useAppSelector } from '../../../../../../store';
import { getUserPayment } from '../../../../../../store/machine-slice/selectors';
import Display from '../../../../../display';
import './style.scss';

const MoneyDisplay = () => {
  const userPayment = useAppSelector(getUserPayment);

  return <Display addClass="money-conrols__display" info={String(userPayment)} />;
};

export default MoneyDisplay;
