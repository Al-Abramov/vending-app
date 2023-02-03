import React from 'react';
import { LayoutFlecProps } from './layout-flex.interface';
import './style.scss';

const LayoutFlex: React.FC<LayoutFlecProps> = (props) => {
  return (
    <div className={`${props.class || ''} LayoutFlex LayoutFlex_${props.flex}`}>
      {props.children}
    </div>
  );
};

export default React.memo(LayoutFlex);
