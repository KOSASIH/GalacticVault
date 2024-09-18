import { AGI } from '../core/AGI';
import { IdentityManager } from '../data/identity/IdentityManager';
import { OmniFusionOS } from '../os/OmniFusionOS';

class OmniFusionSDK {
    constructor() {
        this.agi = new AGI();
        this.identityManager = new IdentityManager();
        this.omniFusionOS = new OmniFusionOS();
    }

    async init() {
        await this.omniFusionOS.init();
        await this.identityManager.init();
        await this.agi.init();
    }

    async sendTransaction(from, to, amount) {
        // Implement transaction logic using AGI and IdentityManager
    }
}

export default OmniFusionSDK;
