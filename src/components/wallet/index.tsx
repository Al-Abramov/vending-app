import { useAppDispatch } from '../../store';
import LayoutFlex from '../layout-flex';
import Coins from './components/coins';
import { useCallback, useEffect } from 'react';
import './style.scss';
import { addMoneyAction, setUserMoney } from '../../store/user-slice';
import WalletDisplay from './components/wallet-display';

const Wallet = () => {
  const dispatch = useAppDispatch();

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
      <WalletDisplay />
    </LayoutFlex>
  );
};

export default Wallet;
