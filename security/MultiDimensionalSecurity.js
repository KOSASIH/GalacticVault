import { BiometricAuth } from './BiometricAuth';
import { BehavioralAnalysis } from './BehavioralAnalysis';
import { EnvironmentalAnalysis } from './EnvironmentalAnalysis';

class MultiDimensionalSecurity {
    constructor() {
        this.biometricAuth = new BiometricAuth();
        this.behavioralAnalysis = new BehavioralAnalysis();
        this.environmentalAnalysis = new EnvironmentalAnalysis();
    }

    async authenticateUser(user) {
        const biometricAuthResult = await this.biometricAuth.authenticateUser(user);
        const behavioralAnalysisResult = await this.behavioralAnalysis.analyzeUserBehavior(user);
        const environmentalAnalysisResult = await this.environmentalAnalysis.analyzeEnvironment(user.environment);

        if (biometricAuthResult && behavioralAnalysisResult && environmentalAnalysisResult) {
            return true;
        } else {
            return false;
        }
    }

    async monitorUser(user) {
        await this.biometricAuth.enrollUser(user);
        await this.behavioralAnalysis.updateBehaviorProfile(user);
        await this.environmentalAnalysis.monitorEnvironment(user.environment);
    }
}

export default MultiDimensionalSecurity;
