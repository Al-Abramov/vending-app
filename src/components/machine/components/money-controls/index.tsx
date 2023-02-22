import LayoutFlex from '../../../layout-flex';
import './style.scss';
import ReseptionChange from '../reseption-change';
import Payment from './components/payment';
import { useAppDispatch } from '../../../../store';
import { useCallback } from 'react';
import { getChangeAction } from '../../../../store/machine-slice';
import MoneyDisplay from './components/display';

const MoneyControls = () => {
  const dispatch = useAppDispatch();

  const getChange = useCallback(() => {
    dispatch(getChangeAction());
  }, [dispatch]);

  return (
    <LayoutFlex flex="start column" class="money-conrols">
      <MoneyDisplay />
      <Payment getChange={getChange} />
      <ReseptionChange />
    </LayoutFlex>
  );
};

export default MoneyControls;
