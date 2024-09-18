import { NeuralNetwork } from 'brain.js';

class AGI {
    constructor() {
        this.neuralNetwork = new NeuralNetwork();
    }

    learn(data) {
        this.neuralNetwork.train(data);
    }

    predict(input) {
        return this.neuralNetwork.run(input);
    }
}

export default AGI;
