import React from 'react';
import './style.scss';

const PriceContainer = () => {
  return (
    <div className="slot__price-container">
      <span className="slot__price">25</span>
      <span className="slot__amount-goods">5</span>
    </div>
  );
};

export default React.memo(PriceContainer);
