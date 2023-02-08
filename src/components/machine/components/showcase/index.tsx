import { useAppDispatch, useAppSelector } from '../../../../store';
import { useCallback } from 'react';
import LayoutFlex from '../../../layout-flex';
import ProductSlot from '../../../product-slot';
import './style.scss';
import { buyProductAction } from '../../../../store/user-slice';
import { IProduct } from '../../../../constant/products/product.iterface';
import { getProducts } from '../../../../store/machine-slice/selectors';

const Showcase = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProducts);

  const buyProduct = useCallback(
    (product: IProduct) => {
      dispatch(buyProductAction(product));
    },
    [dispatch]
  );

  return (
    <LayoutFlex flex="between" class="showcase">
      {products.map((product) => (
        <ProductSlot key={product.id} product={product} buyProduct={buyProduct} />
      ))}
    </LayoutFlex>
  );
};

export default Showcase;
