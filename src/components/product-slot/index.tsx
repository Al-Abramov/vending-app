import LayoutFlex from '../layout-flex';
import Product from '../product';
import PriceContainer from './components/price-container';
import './style.scss';

const ProductSlot = () => {
  return (
    <LayoutFlex flex="center column" class="slot">
      <Product />
      <PriceContainer />
    </LayoutFlex>
  );
};

export default ProductSlot;
