// banking-system/BankingSystem.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './entities/Account.entity';
import { Transaction } from './entities/Transaction.entity';
import { CryptoAsset } from './entities/CryptoAsset.entity';
import { BankingSystemException } from './exceptions/BankingSystemException';

@Injectable()
export class BankingSystem {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
    @InjectRepository(CryptoAsset)
    private readonly cryptoAssetRepository: Repository<CryptoAsset>,
  ) {}

  // Account Management
  async createAccount(user: string, initialBalance: number): Promise<Account> {
    const account = new Account();
    account.user = user;
    account.balance = initialBalance;
    return this.accountRepository.save(account);
  }

  async updateAccount(user: string, newBalance: number): Promise<Account> {
    const account = await this.getAccount(user);
    account.balance = newBalance;
    return this.accountRepository.save(account);
  }

  async getAccount(user: string): Promise<Account> {
    return this.accountRepository.findOne({ where: { user } });
  }

  async getAccountHistory(user: string): Promise<Transaction[]> {
    return this.transactionRepository.find({ where: { user } });
  }

  // Transaction Management
  async deposit(user: string, amount: number, reference: string): Promise<Transaction> {
    const account = await this.getAccount(user);
    const transaction = new Transaction();
    transaction.user = user;
    transaction.type = 'deposit';
    transaction.amount = amount;
    transaction.reference = reference;
    account.balance += amount;
    await this.accountRepository.save(account);
    return this.transactionRepository.save(transaction);
  }

  async withdraw(user: string, amount: number, reference: string): Promise<Transaction> {
    const account = await this.getAccount(user);
    if (account.balance < amount) {
      throw new BankingSystemException('Insufficient balance');
    }
    const transaction = new Transaction();
    transaction.user = user;
    transaction.type = 'withdrawal';
    transaction.amount = amount;
    transaction.reference = reference;
    account.balance -= amount;
    await this.accountRepository.save(account);
    return this.transactionRepository.save(transaction);
  }

  async transfer(from: string, to: string, amount: number, reference: string): Promise<Transaction> {
    const fromAccount = await this.getAccount(from);
    const toAccount = await this.getAccount(to);
    if (fromAccount.balance < amount) {
      throw new BankingSystemException('Insufficient balance');
    }
    const transaction = new Transaction();
    transaction.from = from;
    transaction.to = to;
    transaction.type = 'transfer';
    transaction.amount = amount;
    transaction.reference = reference;
    fromAccount.balance -= amount;
    toAccount.balance += amount;
    await this.accountRepository.save(fromAccount);
    await this.accountRepository.save(toAccount);
    return this.transactionRepository.save(transaction);
  }

  // Crypto Asset Management
  async addCryptoAsset(asset: string, timestamp: number): Promise<CryptoAsset> {
    const cryptoAsset = new CryptoAsset();
    cryptoAsset.asset = asset;
    cryptoAsset.timestamp = timestamp;
    return this.cryptoAssetRepository.save(cryptoAsset);
  }

  async removeCryptoAsset(asset: string, timestamp: number): Promise<CryptoAsset> {
    const cryptoAsset = await this.getCryptoAsset(asset);
    cryptoAsset.timestamp = timestamp;
    return this.cryptoAssetRepository.save(cryptoAsset);
  }

  async getCryptoAsset(asset: string): Promise<CryptoAsset> {
    return this.cryptoAssetRepository.findOne({ where: { asset } });
  }

  async getCryptoAssetHistory(asset: string): Promise<Transaction[]> {
    return this.transactionRepository.find({ where: { asset } });
  }
}
