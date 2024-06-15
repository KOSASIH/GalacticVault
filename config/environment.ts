// environment.ts
import { ChainId, Network } from '@galacticvault/types';

interface EnvironmentConfig {
  network: Network;
  chainId: ChainId;
  rpcUrl: string;
  wsUrl: string;
  explorerUrl: string;
  gasPrice: number;
  gasLimit: number;
  tokenList: string[];
  contractAddresses: {
    [key: string]: string;
  };
  abi: {
    [key: string]: any[];
  };
  infuraProjectId: string;
  alchemyApiKey: string;
  etherscanApiKey: string;
}

const environment: EnvironmentConfig = {
  // Network configuration
  network: 'ainnet', // or 'testnet', 'devnet', etc.
  chainId: 1, // or 4, 5, etc.

  // RPC and WebSocket URLs
  rpcUrl: 'https://mainnet.infura.io/v3/YOUR_PROJECT_ID',
  wsUrl: 'wss://mainnet.infura.io/ws/v3/YOUR_PROJECT_ID',

  // Explorer URL
  explorerUrl: 'https://etherscan.io',

  // Gas configuration
  gasPrice: 20, // in Gwei
  gasLimit: 200000, // in units

  // Token list
  tokenList: [
    'ETH',
    'DAI',
    'USDC',
    'OMNI', // OmniFusion token
  ],

  // Contract addresses
  contractAddresses: {
    BankingSystem: '0x...BankingSystemContractAddress...',
    CryptoGateway: '0x...CryptoGatewayContractAddress...',
    OmniFusionToken: '0x...OmniFusionTokenContractAddress...',
  },

  // ABI definitions
  abi: {
    BankingSystem: [...BankingSystemContractABI...],
    CryptoGateway: [...CryptoGatewayContractABI...],
    OmniFusionToken: [...OmniFusionTokenContractABI...],
  },

  // Infura project ID
  infuraProjectId: 'YOUR_PROJECT_ID',

  // Alchemy API key
  alchemyApiKey: 'YOUR_ALCHEMY_API_KEY',

  // Etherscan API key
  etherscanApiKey: 'YOUR_ETHERSCAN_API_KEY',
};

export default environment;
