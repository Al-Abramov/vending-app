import LayoutFlex from '../layout-flex';
import MachineControls from './components/machine-controls';
import ReseptionProducts from './components/reseption-products';
import Showcase from './components/showcase';
import './style.scss';

const Machine = () => {
  return (
    <LayoutFlex flex="start column" class="machine">
      <Showcase />
      <MachineControls />
      <ReseptionProducts />
    </LayoutFlex>
  );
};

export default Machine;
