// crypto-gateway/CryptoGateway.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CryptoAsset } from './entities/CryptoAsset.entity';
import { CryptoTransaction } from './entities/CryptoTransaction.entity';
import { CryptoWallet } from './entities/CryptoWallet.entity';
import { CryptoGatewayException } from './exceptions/CryptoGatewayException';
import { Web3Service } from '../web3/web3.service';

@Injectable()
export class CryptoGateway {
  constructor(
    @InjectRepository(CryptoAsset)
    private readonly cryptoAssetRepository: Repository<CryptoAsset>,
    @InjectRepository(CryptoTransaction)
    private readonly cryptoTransactionRepository: Repository<CryptoTransaction>,
    @InjectRepository(CryptoWallet)
    private readonly cryptoWalletRepository: Repository<CryptoWallet>,
    private readonly web3Service: Web3Service,
  ) {}

  // Crypto Asset Management
  async addCryptoAsset(asset: string, decimals: number, symbol: string): Promise<CryptoAsset> {
    const cryptoAsset = new CryptoAsset();
    cryptoAsset.asset = asset;
    cryptoAsset.decimals = decimals;
    cryptoAsset.symbol = symbol;
    return this.cryptoAssetRepository.save(cryptoAsset);
  }

  async removeCryptoAsset(asset: string): Promise<CryptoAsset> {
    const cryptoAsset = await this.getCryptoAsset(asset);
    return this.cryptoAssetRepository.remove(cryptoAsset);
  }

  async getCryptoAsset(asset: string): Promise<CryptoAsset> {
    return this.cryptoAssetRepository.findOne({ where: { asset } });
  }

  async getCryptoAssets(): Promise<CryptoAsset[]> {
    return this.cryptoAssetRepository.find();
  }

  // Crypto Wallet Management
  async createCryptoWallet(user: string, asset: string, address: string): Promise<CryptoWallet> {
    const cryptoWallet = new CryptoWallet();
    cryptoWallet.user = user;
    cryptoWallet.asset = asset;
    cryptoWallet.address = address;
    return this.cryptoWalletRepository.save(cryptoWallet);
  }

  async getCryptoWallet(user: string, asset: string): Promise<CryptoWallet> {
    return this.cryptoWalletRepository.findOne({ where: { user, asset } });
  }

  async getCryptoWallets(user: string): Promise<CryptoWallet[]> {
    return this.cryptoWalletRepository.find({ where: { user } });
  }

  // Crypto Transaction Management
  async depositCrypto(user: string, asset: string, amount: number, reference: string): Promise<CryptoTransaction> {
    const cryptoWallet = await this.getCryptoWallet(user, asset);
    const cryptoTransaction = new CryptoTransaction();
    cryptoTransaction.user = user;
    cryptoTransaction.asset = asset;
    cryptoTransaction.type = 'deposit';
    cryptoTransaction.amount = amount;
    cryptoTransaction.reference = reference;
    cryptoWallet.balance += amount;
    await this.cryptoWalletRepository.save(cryptoWallet);
    return this.cryptoTransactionRepository.save(cryptoTransaction);
  }

  async withdrawCrypto(user: string, asset: string, amount: number, reference: string): Promise<CryptoTransaction> {
    const cryptoWallet = await this.getCryptoWallet(user, asset);
    if (cryptoWallet.balance < amount) {
      throw new CryptoGatewayException('Insufficient balance');
    }
    const cryptoTransaction = new CryptoTransaction();
    cryptoTransaction.user = user;
    cryptoTransaction.asset = asset;
    cryptoTransaction.type = 'withdrawal';
    cryptoTransaction.amount = amount;
    cryptoTransaction.reference = reference;
    cryptoWallet.balance -= amount;
    await this.cryptoWalletRepository.save(cryptoWallet);
    return this.cryptoTransactionRepository.save(cryptoTransaction);
  }

  async transferCrypto(from: string, to: string, asset: string, amount: number, reference: string): Promise<CryptoTransaction> {
    const fromCryptoWallet = await this.getCryptoWallet(from, asset);
    const toCryptoWallet = await this.getCryptoWallet(to, asset);
    if (fromCryptoWallet.balance < amount) {
      throw new CryptoGatewayException('Insufficient balance');
    }
    const cryptoTransaction = new CryptoTransaction();
    cryptoTransaction.from = from;
    cryptoTransaction.to = to;
    cryptoTransaction.asset = asset;
    cryptoTransaction.type = 'transfer';
    cryptoTransaction.amount = amount;
    cryptoTransaction.reference = reference;
    fromCryptoWallet.balance -= amount;
    toCryptoWallet.balance += amount;
    await this.cryptoWalletRepository.save(fromCryptoWallet);
    await this.cryptoWalletRepository.save(toCryptoWallet);
    return this.cryptoTransactionRepository.save(cryptoTransaction);
  }

  // Web3 Integration
  async getWeb3Balance(user: string, asset: string): Promise<number> {
    const cryptoWallet =await this.getCryptoWallet(user, asset);
    return this.web3Service.getBalance(cryptoWallet.address, asset);
  }

  async getWeb3TransactionCount(user: string, asset: string): Promise<number> {
    const cryptoWallet = await this.getCryptoWallet(user, asset);
    return this.web3Service.getTransactionCount(cryptoWallet.address, asset);
  }
}
