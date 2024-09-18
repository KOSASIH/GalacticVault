import QuantumResistantCryptography from '../quantum-resistant-cryptography';

describe('QuantumResistantCryptography', () => {
    it('should encrypt data securely', async () => {
        const data = 'Hello, World!';
        const encryptedData = await QuantumResistantCryptography.encryptData(data);
        expect(encryptedData).not.toBe(data);
    });

    it('should decrypt data correctly', async () => {
        const data = 'Hello, World!';
        const encryptedData = await QuantumResistantCryptography.encryptData(data);
        const decryptedData = await QuantumResistantCryptography.decryptData(encryptedData);
        expect(decryptedData).toBe(data);
    });

    it('should resist quantum attacks', async () => {
        const data = 'Hello, World!';
        const encryptedData = await QuantumResistantCryptography.encryptData(data);
        const attackedData = await QuantumResistantCryptography.simulateQuantumAttack(encryptedData);
        expect(attackedData).not.toBe(data);
    });
});
