import { KeystrokeAnalysis } from 'keystroke-analysis';
import { MouseMovementAnalysis } from 'mouse-movement-analysis';
import { UserBehaviorProfiling } from 'user-behavior-profiling';

class BehavioralAnalysis {
    constructor() {
        this.keystrokeAnalysis = new KeystrokeAnalysis();
        this.mouseMovementAnalysis = new MouseMovementAnalysis();
        this.userBehaviorProfiling = new UserBehaviorProfiling();
    }

    async analyzeUserBehavior(user) {
        const keystrokePattern = await this.keystrokeAnalysis.analyze(user.keystrokes);
        const mouseMovementPattern = await this.mouseMovementAnalysis.analyze(user.mouseMovements);
        const behaviorProfile = await this.userBehaviorProfiling.createProfile(user.behavior);

        if (keystrokePattern === mouseMovementPattern && mouseMovementPattern === behaviorProfile) {
            return true;
        } else {
            return false;
        }
    }

    async updateBehaviorProfile(user) {
        await this.userBehaviorProfiling.updateProfile(user.behavior);
    }
}

export default BehavioralAnalysis;
