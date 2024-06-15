// utils/types.ts
export type UUID = string;

export type CurrencyCode = 'USD' | 'EUR' | 'BTC' | 'ETH';

export type TransactionType = 'deposit' | 'withdrawal' | 'transfer';

export type BankingSystemType = 'personal' | 'business';

export type CryptoGatewayType = 'bitcoin' | 'ethereum' | 'litecoin';

export type OmniFusionTokenType = 'erc20' | 'erc721' | 'bep20';

export interface ApiError {
  code: number;
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  error: ApiError | null;
}
