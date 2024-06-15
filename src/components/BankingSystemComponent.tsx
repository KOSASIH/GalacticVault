import React, { useState, useEffect } from 'eact';
import { BankingSystemService } from '../services/BankingSystemService';

interface BankingSystemComponentProps {
  bankingSystemContract: any;
}

const BankingSystemComponent: React.FC<BankingSystemComponentProps> = ({ bankingSystemContract }) => {
  const [balance, setBalance] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  useEffect(() => {
    const getBalance = async () => {
      const balance = await bankingSystemContract.getBalance();
      setBalance(balance);
    };
    getBalance();
  }, [bankingSystemContract]);

  const handleDeposit = async () => {
    await bankingSystemContract.deposit(depositAmount);
    setDepositAmount(0);
  };

  const handleWithdraw = async () => {
    await bankingSystemContract.withdraw(withdrawAmount);
    setWithdrawAmount(0);
  };

  return (
    <div>
      <h2>Banking System</h2>
      <p>Balance: {balance}</p>
      <input
        type="number"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.valueAsNumber)}
        placeholder="Deposit amount"
      />
      <button onClick={handleDeposit}>Deposit</button>
      <input
        type="number"
        value={withdrawAmount}
        onChange={(e) => setWithdrawAmount(e.target.valueAsNumber)}
        placeholder="Withdraw amount"
      />
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default BankingSystemComponent;
