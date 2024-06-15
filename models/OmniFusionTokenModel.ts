// models/OmniFusionTokenModel.ts
export interface OmniFusionTokenModel {
  id: string;
  name: string;
  description: string;
  symbol: string;
  address: string;
  balance: number;
  transactions: OmniFusionTransaction[];
  createdAt: Date;
  updatedAt: Date;
}

export interface OmniFusionTransaction {
  id: string;
  amount: number;
  type: 'end' | 'eceive' | 'transfer';
  description: string;
  txHash: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum OmniFusionTokenStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
}

export enum OmniFusionTokenType {
  ERC20 = 'erc20',
  ERC721 = 'erc721',
  BEP20 = 'bep20',
}
