import { ethers } from 'ethers';

class WalletStorage {
  constructor() {
    this.wallets = {};
  }

  async saveWallet(wallet, password) {
    const encryptedWallet = await ethers.utils.encryptWallet(wallet, password);
    this.wallets[wallet.address] = encryptedWallet;
  }

  async getWallet(password) {
    const walletAddress = Object.keys(this.wallets)[0];
    const encryptedWallet = this.wallets[walletAddress];
    const wallet = await ethers.utils.decryptWallet(encryptedWallet, password);
    return wallet;
  }

  async deleteWallet(password) {
    const walletAddress = Object.keys(this.wallets)[0];
    delete this.wallets[walletAddress];
  }
}

export default WalletStorage;
