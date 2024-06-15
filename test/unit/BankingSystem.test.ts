// test/unit/BankingSystem.test.ts
import { BankingSystemService } from '../services/BankingSystemService';
import { BankingSystemModel } from '../models/BankingSystemModel';
import { BankingSystemRepository } from '../repositories/BankingSystemRepository';

describe('BankingSystemService', () => {
  let bankingSystemService: BankingSystemService;
  let bankingSystemRepository: BankingSystemRepository;

  beforeEach(async () => {
    bankingSystemRepository = new BankingSystemRepository();
    bankingSystemService = new BankingSystemService(bankingSystemRepository);
  });

  it('should create a new banking system', async () => {
    const data: BankingSystemModel = {
      name: 'Personal Checking',
      description: 'Personal checking account',
      accountNumber: '1234567890',
      accountType: 'checking',
      balance: 1000,
    };
    const result = await bankingSystemService.createBankingSystem(data);
    expect(result).toBeInstanceOf(BankingSystemModel);
    expect(result.name).toBe('Personal Checking');
  });

  it('should get all banking systems', async () => {
    const result = await bankingSystemService.getBankingSystems();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
  });

  it('should get a banking system by ID', async () => {
    const id = '1';
    const result = await bankingSystemService.getBankingSystem(id);
    expect(result).toBeInstanceOf(BankingSystemModel);
    expect(result.id).toBe(id);
  });

  it('should update a banking system', async () => {
    const id = '1';
    const data: BankingSystemModel = {
      name: 'Updated Personal Checking',
      description: 'Updated personal checking account',
      accountNumber: '1234567890',
      accountType: 'checking',
      balance: 2000,
    };
    const result = await bankingSystemService.updateBankingSystem(id, data);
    expect(result).toBeInstanceOf(BankingSystemModel);
    expect(result.name).toBe('Updated Personal Checking');
  });

  it('should delete a banking system', async () => {
    const id = '1';
    await bankingSystemService.deleteBankingSystem(id);
    const result = await bankingSystemService.getBankingSystem(id);
    expect(result).toBeNull();
  });
});
