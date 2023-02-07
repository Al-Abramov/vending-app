import { useAppSelector } from '../../../../store';
import { getUserProducts } from '../../../../store/user-slice/selectors';
import LayoutFlex from '../../../layout-flex';
import Product from '../../../product';
import './style.scss';

const ReseptionProducts = () => {
  const products = useAppSelector(getUserProducts);

  return (
    <LayoutFlex flex="start" class="reseption-products">
      {Object.values(products).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </LayoutFlex>
  );
};

export default ReseptionProducts;
