import LayoutFlex from '../../../layout-flex';
import DisplayNum from '../../../display-num';
import './style.scss';
import ReseptionChange from '../reseption-change';
import Payment from './components/payment';
import { useAppSelector } from '../../../../store';
import { getUserPayment } from '../../../../store/machine-slice/selectors';

const MoneyControls = () => {
  const userPayment = useAppSelector(getUserPayment);
  return (
    <LayoutFlex flex="start column" class="money-conrols">
      <DisplayNum addClass="money-conrols__display" num={userPayment} />
      <Payment />
      <ReseptionChange />
    </LayoutFlex>
  );
};

export default MoneyControls;
