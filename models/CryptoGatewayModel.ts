// models/CryptoGatewayModel.ts
export interface CryptoGatewayModel {
  id: string;
  name: string;
  description: string;
  symbol: string;
  address: string;
  balance: number;
  transactions: CryptoTransaction[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CryptoTransaction {
  id: string;
  amount: number;
  type: 'end' | 'eceive' | 'transfer';
  description: string;
  txHash: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum CryptoGatewayStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
}

export enum CryptoGatewayType {
  BITCOIN = 'bitcoin',
  ETHEREUM = 'ethereum',
  LITECOIN = 'litecoin',
}
