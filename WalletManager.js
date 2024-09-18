import { ethers } from 'ethers';
import WalletStorage from './WalletStorage';

class WalletManager {
 constructor() {
    this.walletStorage = new WalletStorage();
  }

  async createWallet(password) {
    const wallet = ethers.Wallet.createRandom();
    await this.walletStorage.saveWallet(wallet, password);
    return wallet;
  }

  async getWallet(password) {
    const wallet = await this.walletStorage.getWallet(password);
    return wallet;
  }

  async deleteWallet(password) {
    await this.walletStorage.deleteWallet(password);
  }

  async getBalance(wallet) {
    const provider = new ethers.providers.JsonRpcProvider();
    const balance = await provider.getBalance(wallet.address);
    return balance;
  }

  async sendTransaction(wallet, to, value) {
    const provider = new ethers.providers.JsonRpcProvider();
    const tx = await wallet.sendTransaction({
      to,
      value,
    });
    return tx;
  }
}

export default WalletManager;
