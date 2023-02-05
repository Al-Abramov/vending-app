import Coin from '../../../coin';
import LayoutFlex from '../../../layout-flex';
import './style.scss';

const Coins = () => {
  return (
    <LayoutFlex flex="between" class="coins">
      {[1, 2, 3, 4].map((coin) => (
        <Coin key={coin} />
      ))}
    </LayoutFlex>
  );
};

export default Coins;
