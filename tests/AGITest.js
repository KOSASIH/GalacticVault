import AGI from '../agi';

describe('AGI', () => {
    it('should process natural language input', async () => {
        const input = 'What is the meaning of life?';
        const response = await AGI.processInput(input);
        expect(response).toBe('The meaning of life is a complex and debated topic...');
    });

    it('should generate creative content', async () => {
        const prompt = 'Write a short story about a futuristic city';
        const response = await AGI.generateContent(prompt);
        expect(response).toBe('In the year 2154, the city of New Eden...');
    });

    it('should reason abstractly', async () => {
        const input = 'If A is true and B is false, then what is C?';
        const response = await AGI.reasonAbstractly(input);
        expect(response).toBe('C is true');
    });
});
