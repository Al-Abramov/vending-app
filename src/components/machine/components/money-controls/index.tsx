import LayoutFlex from '../../../layout-flex';
import DisplayNum from '../../../display';
import './style.scss';
import ReseptionChange from '../reseption-change';
import Payment from './components/payment';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { getUserPayment } from '../../../../store/machine-slice/selectors';
import { useCallback } from 'react';
import { getChangeAction } from '../../../../store/machine-slice';

const MoneyControls = () => {
  const dispatch = useAppDispatch();
  const userPayment = useAppSelector(getUserPayment);

  const getChange = useCallback(() => {
    dispatch(getChangeAction());
  }, [dispatch]);

  return (
    <LayoutFlex flex="start column" class="money-conrols">
      <DisplayNum addClass="money-conrols__display" info={String(userPayment)} />
      <Payment getChange={getChange} />
      <ReseptionChange />
    </LayoutFlex>
  );
};

export default MoneyControls;
