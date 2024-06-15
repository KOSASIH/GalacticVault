// test/unit/CryptoGateway.test.ts
import { CryptoGatewayService } from '../services/CryptoGatewayService';
import { CryptoGatewayModel } from '../models/CryptoGatewayModel';
import { CryptoGatewayRepository } from '../repositories/CryptoGatewayRepository';

describe('CryptoGatewayService', () => {
  let cryptoGatewayService: CryptoGatewayService;
  let cryptoGatewayRepository: CryptoGatewayRepository;

  beforeEach(async () => {
    cryptoGatewayRepository = new CryptoGatewayRepository();
    cryptoGatewayService = new CryptoGatewayService(cryptoGatewayRepository);
  });

  it('should create a new crypto gateway', async () => {
    const data: CryptoGatewayModel = {
      name: 'Bitcoin Gateway',
      description: 'Bitcoin gateway',
      symbol: 'BTC',
      address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
      balance: 10,
    };
    const result = await cryptoGatewayService.createCryptoGateway(data);
    expect(result).toBeInstanceOf(CryptoGatewayModel);
    expect(result.name).toBe('Bitcoin Gateway');
  });

  it('should get all crypto gateways', async () => {
    const result = await cryptoGatewayService.getCryptoGateways();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
  });

  it('should get a crypto gateway by ID', async () => {
    const id = '1';
    const result = await cryptoGatewayService.getCryptoGateway(id);
    expect(result).toBeInstanceOf(CryptoGatewayModel);
    expect(result.id).toBe(id);
  });

  it('should update a crypto gateway', async () => {
    const id = '1';
    const data: CryptoGatewayModel = {
      name: 'Updated Bitcoin Gateway',
      description: 'Updated Bitcoin gateway',
      symbol: 'BTC',
      address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
      balance: 20,
    };
    const result = await cryptoGatewayService.updateCryptoGateway(id, data);
    expect(result).toBeInstanceOf(CryptoGatewayModel);
    expect(result.name).toBe('Updated Bitcoin Gateway');
  });

  it('should delete a crypto gateway', async () => {
    const id = '1';
    await cryptoGatewayService.deleteCryptoGateway(id);
const result = await cryptoGatewayService.getCryptoGateway(id);
    expect(result).toBeNull();
  });
});
