// OmniFusionTokenComponent.tsx
import React, { useState, useEffect } from 'eact';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@web3-react/web3-provider';
import { OmniFusionTokenService } from '../services/omnifusion-token.service';
import { Token } from '../models/token.model';

interface OmniFusionTokenProps {
  tokens: Token[];
}

const OmniFusionTokenComponent: React.FC<OmniFusionTokenProps> = ({ tokens }) => {
  const { account, library } = useWeb3React();
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [amount, setAmount] = useState<string>('');
  const [transactionHash, setTransactionHash] = useState<string>('');

  useEffect(() => {
    if (account && library) {
      OmniFusionTokenService.init(library);
    }
  }, [account, library]);

  const handleSelectToken = (token: Token) => {
    setSelectedToken(token);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleTransferToken = async () => {
    if (!selectedToken ||!amount) return;
    try {
      const transactionHash = await OmniFusionTokenService.transferToken(
        selectedToken,
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
      <h1>OmniFusion Token</h1>
      <select value={selectedToken?.symbol} onChange={(event) => handleSelectToken(tokens.find((token) => token.symbol === event.target.value))}>
        {tokens.map((token) => (
          <option key={token.symbol} value={token.symbol}>
            {token.name}
          </option>
        ))}
      </select>
      <input type="number" value={amount} onChange={handleAmountChange} />
      <button onClick={handleTransferToken}>Transfer Token</button>
      {transactionHash && <p>Transaction Hash: {transactionHash}</p>}
    </div>
  );
};

export default OmniFusionTokenComponent;
