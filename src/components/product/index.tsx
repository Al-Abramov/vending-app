import React from 'react';
import LayoutFlex from '../layout-flex';
import { ProductProps } from './product.interface';
import Tippy from '@tippyjs/react';
import './style.scss';

const Product: React.FC<ProductProps> = ({ product, buyProduct }) => {
  const buy = () => {
    buyProduct && buyProduct(product);
  };

  return (
    <LayoutFlex flex="start column" class="product-wrapper center">
      <span className="product-count">{product.count}</span>
      <Tippy content={<span className="product-tooltip">{product.name}</span>}>
        <div className={`product ${product.type} center`} onClick={buy}></div>
      </Tippy>
    </LayoutFlex>
  );
};

export default React.memo(Product);
