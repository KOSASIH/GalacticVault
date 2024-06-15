import React from 'eact';
import { BankingSystemComponent } from './components/BankingSystemComponent';
import { CryptoGatewayComponent } from './components/CryptoGatewayComponent';
import { OmniFusionTokenComponent } from './components/OmniFusionTokenComponent';

function App() {
  return (
    <div>
      <h1>OmniFusion</h1>
      <BankingSystemComponent />
      <CryptoGatewayComponent />
      <OmniFusionTokenComponent />
    </div>
  );
}

export default App;
