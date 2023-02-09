import React from 'react';
import LayoutFlex from '../layout-flex';
import { DisplayProps } from './display.interace';
import './style.scss';

const Display: React.FC<DisplayProps> = ({ addClass, info }) => {
  return (
    <LayoutFlex flex="center" class={`display-num ${addClass}`}>
      <span>{info}</span>
    </LayoutFlex>
  );
};

export default React.memo(Display);
