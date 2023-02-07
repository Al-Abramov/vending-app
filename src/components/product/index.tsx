import React from 'react';
import LayoutFlex from '../layout-flex';
import { ProductProps } from './product.interface';
import './style.scss';

const Product: React.FC<ProductProps> = ({ product, buyProduct }) => {
  const buy = () => {
    buyProduct && buyProduct(product);
  };

  return (
    <LayoutFlex flex="start column" class="product-wrapper center">
      <span className="product-count">{product.count}</span>
      <div className={`product ${product.type} center`} onClick={buy}></div>
    </LayoutFlex>
  );
};

export default React.memo(Product);
