class OmniFusionOS {
    constructor() {
        this.quantumResistantCryptography = new QuantumResistantCryptography();
    }

    async init() {
        await this.quantumResistantCryptography.init();
    }

    async encrypt(data) {
        return await this.quantumResistantCryptography.encrypt(data);
    }

    async decrypt(data) {
        return await this.quantumResistantCryptography.decrypt(data);
    }
}

export default OmniFusionOS;
