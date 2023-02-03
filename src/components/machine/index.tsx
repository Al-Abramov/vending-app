import LayoutFlex from '../layout-flex';
import MoneyControls from './components/money-controls';
import ReseptionProducts from './components/reseption-products';
import Showcase from './components/showcase';
import './style.scss';

const Machine = () => {
  return (
    <LayoutFlex flex="start column" class="machine">
      <Showcase />
      <MoneyControls />
      <ReseptionProducts />
    </LayoutFlex>
  );
};

export default Machine;
