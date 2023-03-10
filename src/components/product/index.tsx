import React from 'react';
import LayoutFlex from '../layout-flex';
import { ProductProps } from './product.interface';
import Tippy from '@tippyjs/react';
import './style.scss';
import Count from './components/count';

const Product: React.FC<ProductProps> = ({ product, buyProduct }) => {
  const buy = () => {
    buyProduct && buyProduct(product);
  };

  return (
    <LayoutFlex flex="start column" class="product-wrapper center">
      <Count count={product.count} />
      <Tippy content={product.name} className="product-tooltip">
        <div className={`product ${product.type} center`} onClick={buy}></div>
      </Tippy>
    </LayoutFlex>
  );
};

export default React.memo(Product);
