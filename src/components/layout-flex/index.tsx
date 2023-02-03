import React from 'react';
import { LayoutFlecProps } from './layout-flex.interface';
import './style.scss';

const LayoutFlex: React.FC<LayoutFlecProps> = (props) => {
  return (
    <div className={`LayoutFlex LayoutFlex_${props.flex} ${props.class || ''}`}>
      {props.children}
    </div>
  );
};

export default React.memo(LayoutFlex);
