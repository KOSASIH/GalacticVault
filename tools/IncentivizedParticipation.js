import { ReputationSystem } from 'reputation-system';
import { RewardMechanisms } from 'reward-mechanisms';
import { GamificationEngine } from 'gamification-engine';
import { SocialSharing } from 'social-sharing';
import { Leaderboard } from 'leaderboard';

class IncentivizedParticipation {
    constructor() {
        this.reputationSystem = new ReputationSystem();
        this.rewardMechanisms = new RewardMechanisms();
        this.gamificationEngine = new GamificationEngine();
        this.socialSharing = new SocialSharing();
        this.leaderboard = new Leaderboard();
    }

    async participateInChallenge(challenge) {
        await this.reputationSystem.updateReputation(challenge);
        await this.rewardMechanisms.awardRewards(challenge);
        await this.gamificationEngine.updateProgress(challenge);
        await this.socialSharing.shareProgress(challenge);
        await this.leaderboard.updateRankings(challenge);
    }

    async createNewChallenge(challengeName) {
        await this.gamificationEngine.createChallenge(challengeName);
        await this.leaderboard.createLeaderboard(challengeName);
    }

    async trackProgress(challenge) {
        await this.gamificationEngine.trackProgress(challenge);
        await this.leaderboard.updateRankings(challenge);
    }
}

export default IncentivizedParticipation;
