import store, { useAppDispatch, useAppSelector } from '../../../../store';
import { useCallback } from 'react';
import { decreaseUserPayment, productCounter } from '../../../../store/machine-slice';
import LayoutFlex from '../../../layout-flex';
import ProductSlot from '../../../product-slot';
import './style.scss';
import { addProduct } from '../../../../store/user-slice';
import { IProduct } from '../../../../constant/products/product.iterface';
import { getProducts, getUserPayment } from '../../../../store/machine-slice/selectors';

const Showcase = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProducts);
  //const userPayment = useAppSelector(getUserPayment);

  const buyProduct = useCallback(
    (product: IProduct) => {
      //if (userPayment < product.price) return;
      if (store.getState().machine.userPayment < product.price) return;
      dispatch(productCounter(product.id));
      dispatch(decreaseUserPayment(product.price));
      dispatch(addProduct(product));
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
