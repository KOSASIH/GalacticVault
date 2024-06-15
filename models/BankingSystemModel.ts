// models/BankingSystemModel.ts
export interface BankingSystemModel {
  id: string;
  name: string;
  description: string;
  accountNumber: string;
  accountType: 'checking' | 'avings' | 'credit';
  balance: number;
  transactions: Transaction[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Transaction {
  id: string;
  amount: number;
  type: 'deposit' | 'withdrawal' | 'transfer';
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum BankingSystemStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
}

export enum BankingSystemType {
  PERSONAL = 'personal',
  BUSINESS = 'business',
}
