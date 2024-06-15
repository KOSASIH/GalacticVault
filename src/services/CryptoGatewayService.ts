// services/CryptoGatewayService.ts
import { Injectable } from '@nestjs/common';
import { CryptoGatewayModel } from '../models/CryptoGatewayModel';
import { CryptoGatewayRepository } from '../repositories/CryptoGatewayRepository';
import { CryptoTransaction } from '../models/CryptoTransaction';

@Injectable()
export class CryptoGatewayService {
  constructor(private readonly cryptoGatewayRepository: CryptoGatewayRepository) {}

  async init(): Promise<void> {
    // Initialize crypto gateway with default data
    const defaultData = [
      {
        id: '1',
        name: 'Bitcoin Gateway',
        description: 'Bitcoin gateway',
        symbol: 'BTC',
        address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        balance: 10,
      },
      {
        id: '2',
        name: 'Ethereum Gateway',
        description: 'Ethereum gateway',
        symbol: 'ETH',
        address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
        balance: 50,
      },
    ];
    await this.cryptoGatewayRepository.createMany(defaultData);
  }

  async getCryptoGateways(): Promise<CryptoGatewayModel[]> {
    return this.cryptoGatewayRepository.findAll();
  }

  async getCryptoGateway(id: string): Promise<CryptoGatewayModel> {
    return this.cryptoGatewayRepository.findById(id);
  }

  async createCryptoGateway(data: CryptoGatewayModel): Promise<CryptoGatewayModel> {
    return this.cryptoGatewayRepository.create(data);
  }

  async updateCryptoGateway(id: string, data: CryptoGatewayModel): Promise<CryptoGatewayModel> {
    return this.cryptoGatewayRepository.update(id, data);
  }

  async deleteCryptoGateway(id: string): Promise<void> {
    return this.cryptoGatewayRepository.delete(id);
  }

  async getTransactions(id: string): Promise<CryptoTransaction[]> {
    return this.cryptoGatewayRepository.getTransactions(id);
  }

  async createTransaction(id: string, data: CryptoTransaction): Promise<CryptoTransaction> {
    return this.cryptoGatewayRepository.createTransaction(id, data);
  }
}
