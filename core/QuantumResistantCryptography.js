import { QuantumComputer } from 'quantum-computer';
import { LatticeBasedCryptography } from 'lattice-based-cryptography';
import { CodeBasedCryptography } from 'code-based-cryptography';
import { MultivariateCryptography } from 'multivariate-cryptography';

class QuantumResistantCryptography {
    constructor() {
        this.quantumComputer = new QuantumComputer();
        this.latticeBasedCryptography = new LatticeBasedCryptography();
        this.codeBasedCryptography = new CodeBasedCryptography();
        this.multivariateCryptography = new MultivariateCryptography();
    }

    async init() {
        await this.quantumComputer.init();
        await this.latticeBasedCryptography.init();
        await this.codeBasedCryptography.init();
        await this.multivariateCryptography.init();
    }

    async encrypt(data) {
        const latticeBasedEncryptedData = await this.latticeBasedCryptography.encrypt(data);
        const codeBasedEncryptedData = await this.codeBasedCryptography.encrypt(data);
        const multivariateEncryptedData = await this.multivariateCryptography.encrypt(data);

        return {
            latticeBasedEncryptedData,
            codeBasedEncryptedData,
            multivariateEncryptedData,
        };
    }

    async decrypt(data) {
        const latticeBasedDecryptedData = await this.latticeBasedCryptography.decrypt(data);
        const codeBasedDecryptedData = await this.codeBasedCryptography.decrypt(data);
        const multivariateDecryptedData = await this.multivariateCryptography.decrypt(data);

        return {
            latticeBasedDecryptedData,
            codeBasedDecryptedData,
            multivariateDecryptedData,
        };
    }

    async sign(data) {
        const latticeBasedSignature = await this.latticeBasedCryptography.sign(data);
        const codeBasedSignature = await this.codeBasedCryptography.sign(data);
        const multivariateSignature = await this.multivariateCryptography.sign(data);

        return {
            latticeBasedSignature,
            codeBasedSignature,
            multivariateSignature,
        };
    }

    async verify(data, signature) {
        const latticeBasedVerification = await this.latticeBasedCryptography.verify(data, signature);
        const codeBasedVerification = await this.codeBasedCryptography.verify(data, signature);
        const multivariateVerification = await this.multivariateCryptography.verify(data, signature);

        return {
            latticeBasedVerification,
            codeBasedVerification,
            multivariateVerification,
        };
    }
}

export default QuantumResistantCryptography;
