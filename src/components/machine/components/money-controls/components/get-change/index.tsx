import React from 'react';
import { GetChangeProps } from './get-change.interface';
import './style.scss';

const GetChange: React.FC<GetChangeProps> = ({ getChange }) => {
  return <div className="get-change" onClick={getChange}></div>;
};

export default React.memo(GetChange);
