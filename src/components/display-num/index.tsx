import React from 'react';
import LayoutFlex from '../layout-flex';
import { DisplayNumProps } from './display-num.interace';
import './style.scss';

const DisplayNum: React.FC<DisplayNumProps> = ({ addClass, num }) => {
  return (
    <LayoutFlex flex="center" class={`display-num ${addClass}`}>
      <span>{num}</span>
    </LayoutFlex>
  );
};

export default React.memo(DisplayNum);
