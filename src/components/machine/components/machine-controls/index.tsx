import { useAppSelector } from '../../../../store';
import Display from '../../../display';
import LayoutFlex from '../../../layout-flex';
import MoneyControls from '../money-controls';
import './style.scss';

const MachineControls = () => {
  const notice = useAppSelector((state) => state.machine.notice);

  return (
    <LayoutFlex flex="between" class="machine-conrols">
      <Display info={notice} addClass="display-text" />
      <MoneyControls />
    </LayoutFlex>
  );
};

export default MachineControls;
