import LayoutFlex from '../layout-flex';
import Amount from './components/amount';
import Coins from './components/coins';
import './style.scss';

const Wallet = () => {
  return (
    <LayoutFlex flex="between align-center" class="wallet">
      <Coins />
      <Amount />
    </LayoutFlex>
  );
};

export default Wallet;
