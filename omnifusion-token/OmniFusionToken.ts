// omnifusion-token/OmniFusionToken.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Token } from './entities/Token.entity';
import { TokenHolder } from './entities/TokenHolder.entity';
import { TokenTransaction } from './entities/TokenTransaction.entity';
import { OmniFusionTokenException } from './exceptions/OmniFusionTokenException';
import { Web3Service } from '../web3/web3.service';
import { BlockchainService } from '../blockchain/blockchain.service';

@Injectable()
export class OmniFusionToken {
  constructor(
    @InjectRepository(Token)
    private readonly tokenRepository: Repository<Token>,
    @InjectRepository(TokenHolder)
    private readonly tokenHolderRepository: Repository<TokenHolder>,
    @InjectRepository(TokenTransaction)
    private readonly tokenTransactionRepository: Repository<TokenTransaction>,
    private readonly web3Service: Web3Service,
    private readonly blockchainService: BlockchainService,
  ) {}

  // Token Management
  async createToken(name: string, symbol: string, totalSupply: number): Promise<Token> {
    const token = new Token();
    token.name = name;
    token.symbol = symbol;
    token.totalSupply = totalSupply;
    return this.tokenRepository.save(token);
  }

  async getToken(tokenId: number): Promise<Token> {
    return this.tokenRepository.findOne({ where: { id: tokenId } });
  }

  async getTokens(): Promise<Token[]> {
    return this.tokenRepository.find();
  }

  // Token Holder Management
  async createTokenHolder(user: string, tokenId: number, balance: number): Promise<TokenHolder> {
    const tokenHolder = new TokenHolder();
    tokenHolder.user = user;
    tokenHolder.tokenId = tokenId;
    tokenHolder.balance = balance;
    return this.tokenHolderRepository.save(tokenHolder);
  }

  async getTokenHolder(user: string, tokenId: number): Promise<TokenHolder> {
    return this.tokenHolderRepository.findOne({ where: { user, tokenId } });
  }

  async getTokenHolders(tokenId: number): Promise<TokenHolder[]> {
    return this.tokenHolderRepository.find({ where: { tokenId } });
  }

  // Token Transaction Management
  async transferToken(from: string, to: string, tokenId: number, amount: number): Promise<TokenTransaction> {
    const fromTokenHolder = await this.getTokenHolder(from, tokenId);
    const toTokenHolder = await this.getTokenHolder(to, tokenId);
    if (fromTokenHolder.balance < amount) {
      throw new OmniFusionTokenException('Insufficient balance');
    }
    const tokenTransaction = new TokenTransaction();
    tokenTransaction.from = from;
    tokenTransaction.to = to;
    tokenTransaction.tokenId = tokenId;
    tokenTransaction.amount = amount;
    fromTokenHolder.balance -= amount;
    toTokenHolder.balance += amount;
    await this.tokenHolderRepository.save(fromTokenHolder);
    await this.tokenHolderRepository.save(toTokenHolder);
    return this.tokenTransactionRepository.save(tokenTransaction);
  }

  async getTokenTransactions(tokenId: number): Promise<TokenTransaction[]> {
    return this.tokenTransactionRepository.find({ where: { tokenId } });
  }

  // Web3 Integration
  async getWeb3TokenBalance(user: string, tokenId: number): Promise<number> {
    const tokenHolder = await this.getTokenHolder(user, tokenId);
    return this.web3Service.getBalance(tokenHolder.address, tokenId);
  }

  async getWeb3TokenTransactionCount(user: string, tokenId: number): Promise<number> {
    const tokenHolder = await this.getTokenHolder(user, tokenId);
    return this.web3Service.getTransactionCount(tokenHolder.address, tokenId);
  }

  // Blockchain Integration
  async mintToken(tokenId: number, amount: number): Promise<void> {
    await this.blockchainService.mintToken(tokenId, amount);
  }

  async burnToken(tokenId: number, amount: number): Promise<void> {
    await this.blockchainService.burnToken(tokenId, amount);
  }
}
