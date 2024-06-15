// services/OmniFusionTokenService.ts
import { Injectable } from '@nestjs/common';
import { OmniFusionTokenModel } from '../models/OmniFusionTokenModel';
import { OmniFusionTokenRepository } from '../repositories/OmniFusionTokenRepository';
import { OmniFusionTransaction } from '../models/OmniFusionTransaction';

@Injectable()
export class OmniFusionTokenService {
  constructor(private readonly omniFusionTokenRepository: OmniFusionTokenRepository) {}

  async init(): Promise<void> {
    // Initialize OmniFusion token with default data
    const defaultData = [
      {
        id: '1',
        name: 'OmniFusion Token',
        description: 'OmniFusion token',
        symbol: 'OMN',
        address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
        balance: 1000,
      },
    ];
    await this.omniFusionTokenRepository.createMany(defaultData);
  }

  async getOmniFusionTokens(): Promise<OmniFusionTokenModel[]> {
    return this.omniFusionTokenRepository.findAll();
  }

  async getOmniFusionToken(id: string): Promise<OmniFusionTokenModel> {
    return this.omniFusionTokenRepository.findById(id);
  }

  async createOmniFusionToken(data: OmniFusionTokenModel): Promise<OmniFusionTokenModel> {
    return this.omniFusionTokenRepository.create(data);
  }

  async updateOmniFusionToken(id: string, data: OmniFusionTokenModel): Promise<OmniFusionTokenModel> {
    return this.omniFusionTokenRepository.update(id, data);
  }

  async deleteOmniFusionToken(id: string): Promise<void> {
    return this.omniFusionTokenRepository.delete(id);
  }

  async getTransactions(id: string): Promise<OmniFusionTransaction[]> {
    return this.omniFusionTokenRepository.getTransactions(id);
  }

  async createTransaction(id: string, data: OmniFusionTransaction): Promise<OmniFusionTransaction> {
    return this.omniFusionTokenRepository.createTransaction(id, data);
  }
}
