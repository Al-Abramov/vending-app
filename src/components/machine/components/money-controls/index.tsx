import LayoutFlex from '../../../layout-flex';
import DisplayNum from '../../../display-num';
import './style.scss';
import ReseptionChange from '../reseption-change';
import Payment from './components/payment';

const MoneyControls = () => {
  return (
    <LayoutFlex flex="start column" class="money-conrols">
      <DisplayNum />
      <Payment />
      <ReseptionChange />
    </LayoutFlex>
  );
};

export default MoneyControls;
