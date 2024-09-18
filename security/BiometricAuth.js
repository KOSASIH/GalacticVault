import { FingerprintRecognition } from 'fingerprint-recognition';
import { FacialRecognition } from 'facial-recognition';
import { IrisScanning } from 'iris-scanning';
import { DNAAnalysis } from 'dna-analysis';
import { VoiceRecognition } from 'voice-recognition';

class BiometricAuth {
    constructor() {
        this.fingerprintRecognition = new FingerprintRecognition();
        this.facialRecognition = new FacialRecognition();
        this.irisScanning = new IrisScanning();
        this.dnaAnalysis = new DNAAnalysis();
        this.voiceRecognition = new VoiceRecognition();
    }

    async authenticateUser(user) {
        const fingerprintMatch = await this.fingerprintRecognition.match(user.fingerprint);
        const facialMatch = await this.facialRecognition.match(user.face);
        const irisMatch = await this.irisScanning.match(user.iris);
        const dnaMatch = await this.dnaAnalysis.match(user.dna);
        const voiceMatch = await this.voiceRecognition.match(user.voice);

        if (fingerprintMatch && facialMatch && irisMatch && dnaMatch && voiceMatch) {
            return true;
        } else {
            return false;
        }
    }

    async enrollUser(user) {
        await this.fingerprintRecognition.enroll(user.fingerprint);
        await this.facialRecognition.enroll(user.face);
        await this.irisScanning.enroll(user.iris);
        await this.dnaAnalysis.enroll(user.dna);
        await this.voiceRecognition.enroll(user.voice);
    }
}

export default BiometricAuth;
