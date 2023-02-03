import React from 'react';
import './App.scss';
import LayoutFlex from './components/layout-flex';
import Machine from './components/machine';
import Wallet from './components/wallet';

function App() {
  return (
    <LayoutFlex flex="start column" class="App">
      <Machine />
      <Wallet />
    </LayoutFlex>
  );
}

export default App;
