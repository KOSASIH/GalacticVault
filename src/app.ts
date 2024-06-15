// src/app.ts
import { Injectable } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';
import { Web3Service } from './web3/web3.service';
import { BlockchainService } from './blockchain/blockchain.service';
import { CryptoGateway } from './crypto-gateway/crypto-gateway';
import { OmniFusionToken } from './omnifusion-token/omnifusion-token';

@Injectable()
export class App {
  constructor(
    private readonly configService: ConfigService,
    private readonly web3Service: Web3Service,
    private readonly blockchainService: BlockchainService,
    private readonly cryptoGateway: CryptoGateway,
    private readonly omniFusionToken: OmniFusionToken,
  ) {}

  async bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    const port = this.configService.getPort();

    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());

    await app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  }

  async start(): Promise<void> {
    await this.bootstrap();
    await this.web3Service.init();
    await this.blockchainService.init();
    await this.cryptoGateway.init();
    await this.omniFusionToken.init();
  }
      }
