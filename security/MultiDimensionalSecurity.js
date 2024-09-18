import { BiometricAuth } from './BiometricAuth';
import { BehavioralAnalysis } from './BehavioralAnalysis';
import { EnvironmentalAnalysis } from './EnvironmentalAnalysis';

class MultiDimensionalSecurity {
    constructor() {
        this.biometricAuth = new BiometricAuth();
        this.behavioralAnalysis = new BehavioralAnalysis();
        this.environmentalAnalysis = new EnvironmentalAnalysis();
    }

    async authenticate(user) {
        const biometricResult = await this.biometricAuth.authenticate(user);
        const behavioralResult = await this.behavioralAnalysis.authenticate(user);
        const environmentalResult = await this.environmentalAnalysis.authenticate(user);

        return biometricResult && behavioralResult && environmentalResult;
    }
}

export default MultiDimensionalSecurity;
