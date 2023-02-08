import { useAppDispatch, useAppSelector } from '../../store';
import DisplayNum from '../display-num';
import LayoutFlex from '../layout-flex';
import Coins from './components/coins';
import { useCallback } from 'react';
import './style.scss';
import { addMoneyAction } from '../../store/user-slice';
import { getUserMoney } from '../../store/user-slice/selectors';

const Wallet = () => {
  const dispatch = useAppDispatch();
  const userMoney = useAppSelector(getUserMoney);

  const clickCoin = useCallback(
    (coinValue: number) => {
      dispatch(addMoneyAction(coinValue));
    },
    [dispatch]
  );

  return (
    <LayoutFlex flex="between align-center" class="wallet">
      <Coins clickCoin={clickCoin} />
      <DisplayNum addClass="wallet__display" num={userMoney} />
    </LayoutFlex>
  );
};

export default Wallet;
