import React from 'react';
import LayoutFlex from '../layout-flex';
import Product from '../product';
import PriceContainer from './components/price-container';
import { ProductSlotProps } from './product-slot.interface';
import './style.scss';

const ProductSlot: React.FC<ProductSlotProps> = ({ product, buyProduct }) => {
  return (
    <LayoutFlex flex="center column" class="slot">
      {product.count ? <Product product={product} buyProduct={buyProduct} /> : ''}
      <PriceContainer price={product.price} />
    </LayoutFlex>
  );
};

export default React.memo(ProductSlot);
