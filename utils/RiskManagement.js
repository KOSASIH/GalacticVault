import { BayesianNetwork } from 'bayesian-network';
import { DecisionTree } from 'decision-tree';
import { RandomForest } from 'random-forest';
import { SupportVectorMachine } from 'support-vector-machine';

class RiskManagement {
    constructor() {
        this.bayesianNetwork = new BayesianNetwork();
        this.decisionTree = new DecisionTree();
        this.randomForest = new RandomForest();
        this.supportVectorMachine = new SupportVectorMachine();
    }

    async init() {
        await this.bayesianNetwork.init();
        await this.decisionTree.init();
        await this.randomForest.init();
        await this.supportVectorMachine.init();
    }

    async assessRisk(data) {
        const bayesianNetworkRiskAssessment = await this.bayesianNetwork.assessRisk(data);
        const decisionTreeRiskAssessment = await this.decisionTree.assessRisk(data);
        const randomForestRiskAssessment = await this.randomForest.assessRisk(data);
        const supportVectorMachineRiskAssessment = await this.supportVectorMachine.assessRisk(data);

        return {
            bayesianNetworkRiskAssessment,
            decisionTreeRiskAssessment,
            randomForestRiskAssessment,
            supportVectorMachineRiskAssessment,
        };
    }

    async mitigateRisk(data) {
        const bayesianNetworkMitigation = await this.bayesianNetwork.mitigateRisk(data);
        const decisionTreeMitigation = await this.decisionTree.mitigateRisk(data);
        const randomForestMitigation = await this.randomForest.mitigateRisk(data);
        const supportVectorMachineMitigation = await this.supportVectorMachine.mitigateRisk(data);

        return {
            bayesianNetworkMitigation,
            decisionTreeMitigation,
            randomForestMitigation,
            supportVectorMachineMitigation,
        };
    }
}

export default RiskManagement;
