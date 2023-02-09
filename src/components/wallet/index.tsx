import { useAppDispatch, useAppSelector } from '../../store';
import DisplayNum from '../display';
import LayoutFlex from '../layout-flex';
import Coins from './components/coins';
import { useCallback, useEffect } from 'react';
import './style.scss';
import { addMoneyAction, setUserMoney } from '../../store/user-slice';
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

  useEffect(() => {
    dispatch(setUserMoney());
  }, []);

  return (
    <LayoutFlex flex="between align-center" class="wallet">
      <Coins clickCoin={clickCoin} />
      <DisplayNum addClass="wallet__display" info={String(userMoney)} />
    </LayoutFlex>
  );
};

export default Wallet;
