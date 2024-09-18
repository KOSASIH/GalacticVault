import { ERC725Identity } from '../contracts/ERC725Identity.sol';

class IdentityManager {
    constructor() {
        this.identityContract = new ERC725Identity();
    }

    async createIdentity(address, identity) {
        await this.identityContract.setIdentity(address, identity);
    }

    async getIdentity(address) {
        return await this.identityContract.getIdentity(address);
    }
}

export default IdentityManager;
