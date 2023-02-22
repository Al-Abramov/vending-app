import React from 'react';
import { ProductCountProps } from './count.interface';
import './style.scss';

const Count: React.FC<ProductCountProps> = ({ count }) => {
  return <span className="product-count">{count}</span>;
};

export default React.memo(Count);
