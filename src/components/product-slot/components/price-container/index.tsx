import React from 'react';
import { PriceContainerProps } from './price-container.iterface';
import './style.scss';

const PriceContainer: React.FC<PriceContainerProps> = ({ count, price }) => {
  return (
    <div className="slot__price-container center">
      <span className="slot__price center">{price}</span>
    </div>
  );
};

export default React.memo(PriceContainer);
