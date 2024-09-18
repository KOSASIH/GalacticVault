import { NeuralNetwork } from 'brain.js';
import { SpikingNeuralNetwork } from 'spiking-neural-network';

class NeuromorphicProcessor {
    constructor() {
        this.neuralNetwork = new NeuralNetwork();
        this.spikingNeuralNetwork = new SpikingNeuralNetwork();
    }

    async init() {
        await this.neuralNetwork.init();
        await this.spikingNeuralNetwork.init();
    }

    async process(data) {
        const neuralNetworkOutput = await this.neuralNetwork.run(data);
        const spikingNeuralNetworkOutput = await this.spikingNeuralNetwork.run(data);

        return {
            neuralNetworkOutput,
            spikingNeuralNetworkOutput,
        };
    }

    async learn(data) {
        await this.neuralNetwork.train(data);
        await this.spikingNeuralNetwork.train(data);
    }

    async optimize() {
        await this.neuralNetwork.optimize();
        await this.spikingNeuralNetwork.optimize();
    }
}

export default NeuromorphicProcessor;
