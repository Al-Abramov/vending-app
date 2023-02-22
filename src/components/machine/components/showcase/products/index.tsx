import React, { useCallback } from 'react';
import { IProduct } from '../../../../../constant/products/product.iterface';
import { useAppDispatch, useAppSelector } from '../../../../../store';
import { getProducts } from '../../../../../store/machine-slice/selectors';
import { buyProductAction } from '../../../../../store/user-slice';
import ProductSlot from '../../../../product-slot';
import './style.scss';

const MachineProducts = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProducts);

  const buyProduct = useCallback(
    (product: IProduct) => {
      dispatch(buyProductAction(product));
    },
    [dispatch]
  );

  return (
    <>
      {products.map((product) => (
        <ProductSlot key={product.id} product={product} buyProduct={buyProduct} />
      ))}
    </>
  );
};

export default MachineProducts;
