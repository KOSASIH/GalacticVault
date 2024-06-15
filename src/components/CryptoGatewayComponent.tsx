// CryptoGatewayComponent.tsx
import React, { useState, useEffect } from 'eact';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@web3-react/web3-provider';
import { CryptoGatewayService } from '../services/crypto-gateway.service';
import { CryptoCurrency } from '../models/crypto-currency.model';

interface CryptoGatewayProps {
  currencies: CryptoCurrency[];
}

const CryptoGatewayComponent: React.FC<CryptoGatewayProps> = ({ currencies }) => {
  const { account, library } = useWeb3React();
  const [selectedCurrency, setSelectedCurrency] = useState<CryptoCurrency | null>(null);
  const [amount, setAmount] = useState<string>('');
  const [transactionHash, setTransactionHash] = useState<string>('');

  useEffect(() => {
    if (account && library) {
      CryptoGatewayService.init(library);
    }
  }, [account, library]);

  const handleSelectCurrency = (currency: CryptoCurrency) => {
    setSelectedCurrency(currency);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleSendTransaction = async () => {
    if (!selectedCurrency ||!amount) return;
    try {
      const transactionHash = await CryptoGatewayService.sendTransaction(
        selectedCurrency,
        amount,
        account,
      );
      setTransactionHash(transactionHash);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Crypto Gateway</h1>
      <select value={selectedCurrency?.symbol} onChange={(event) => handleSelectCurrency(currencies.find((currency) => currency.symbol === event.target.value))}>
        {currencies.map((currency) => (
          <option key={currency.symbol} value={currency.symbol}>
            {currency.name}
          </option>
        ))}
      </select>
      <input type="number" value={amount} onChange={handleAmountChange} />
      <button onClick={handleSendTransaction}>Send Transaction</button>
      {transactionHash && <p>Transaction Hash: {transactionHash}</p>}
    </div>
  );
};

export default CryptoGatewayComponent;
