import Web3 from 'web3';

class BankingSystemService {
  private web3: Web3;
  private bankingSystemContract: any;

  constructor(web3: Web3, bankingSystemContractAddress: string, bankingSystemContractABI: any[]) {
    this.web3 = web3;
    this.bankingSystemContract = new web3.eth.Contract(bankingSystemContractABI, bankingSystemContractAddress);
  }

  async getBalance(): Promise<number> {
    const balance = await this.bankingSystemContract.methods.getBalance().call();
    return balance;
  }

  async deposit(amount: number): Promise<void> {
    await this.bankingSystemContract.methods.deposit(amount).send({ from: this.web3.eth.defaultAccount });
  }

  async withdraw(amount: number): Promise<void> {
    await this.bankingSystemContract.methods.withdraw(amount).send({ from: this.web3.eth.defaultAccount });
  }
}

export default BankingSystemService;
