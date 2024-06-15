// test/unit/OmniFusionToken.test.ts
import { OmniFusionTokenService } from '../services/OmniFusionTokenService';
import { OmniFusionTokenModel } from '../models/OmniFusionTokenModel';
import { OmniFusionTokenRepository } from '../repositories/OmniFusionTokenRepository';

describe('OmniFusionTokenService', () => {
  let omniFusionTokenService: OmniFusionTokenService;
  let omniFusionTokenRepository: OmniFusionTokenRepository;

  beforeEach(async () => {
    omniFusionTokenRepository = new OmniFusionTokenRepository();
    omniFusionTokenService = new OmniFusionTokenService(omniFusionTokenRepository);
  });

  it('should create a new OmniFusion token', async () => {
    const data: OmniFusionTokenModel = {
      name: 'OmniFusion Token',
      description: 'OmniFusion token',
      symbol: 'OMN',
      address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      balance: 1000,
    };
    const result = await omniFusionTokenService.createOmniFusionToken(data);
    expect(result).toBeInstanceOf(OmniFusionTokenModel);
    expect(result.name).toBe('OmniFusion Token');
  });

  it('should get all OmniFusion tokens', async () => {
    const result = await omniFusionTokenService.getOmniFusionTokens();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
  });

  it('should get an OmniFusion token by ID', async () => {
    const id = '1';
    const result = await omniFusionTokenService.getOmniFusionToken(id);
    expect(result).toBeInstanceOf(OmniFusionTokenModel);
    expect(result.id).toBe(id);
  });

  it('should update an OmniFusion token', async () => {
    const id = '1';
    const data: OmniFusionTokenModel = {
      name: 'Updated OmniFusion Token',
      description: 'Updated OmniFusion token',
      symbol: 'OMN',
      address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      balance: 2000,
    };
    const result = await omniFusionTokenService.updateOmniFusionToken(id, data);
    expect(result).toBeInstanceOf(OmniFusionTokenModel);
    expect(result.name).toBe('Updated OmniFusion Token');
  });

  it('should delete an OmniFusion token', async () => {
    const id = '1';
    await omniFusionTokenService.deleteOmniFusionToken(id);
    const result = await omniFusionTokenService.getOmniFusionToken(id);
    expect(result).toBeNull();
  });
});
