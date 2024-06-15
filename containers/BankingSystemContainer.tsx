// containers/BankingSystemContainer.tsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadBankingSystemData } from '../store/banking-system/banking-system.actions';
import { BankingSystemState } from '../store/banking-system/banking-system.state';
import { BankingSystemService } from '../services/banking-system.service';

const BankingSystemContainer: React.FC = () => {
  const dispatch = useDispatch();
  const bankingSystemState = (store.getState() as { bankingSystem: BankingSystemState }).bankingSystem;

  useEffect(() => {
    BankingSystemService.init();
    dispatch(loadBankingSystemData());
  }, [dispatch]);

  return null;
};

export default BankingSystemContainer;
