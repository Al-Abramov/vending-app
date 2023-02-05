import DisplayNum from '../display-num';
import LayoutFlex from '../layout-flex';
import Amount from './components/amount';
import Coins from './components/coins';
import './style.scss';

const Wallet = () => {
  return (
    <LayoutFlex flex="between align-center" class="wallet">
      <Coins />
      <DisplayNum addClass="wallet__display" num={1005} />
    </LayoutFlex>
  );
};

export default Wallet;
