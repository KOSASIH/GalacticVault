import { NetworkProbe } from 'network-probe';
import { NetworkSniffer } from 'network-sniffer';
import { NetworkAnalyzer } from 'network-analyzer';
import { NetworkVisualizer } from 'network-visualizer';

class NetworkMonitor {
    constructor() {
        this.networkProbe = new NetworkProbe();
        this.networkSniffer = new NetworkSniffer();
        this.networkAnalyzer = new NetworkAnalyzer();
        this.networkVisualizer = new NetworkVisualizer();
    }

    async init() {
        await this.networkProbe.init();
        await this.networkSniffer.init();
        await this.networkAnalyzer.init();
        await this.networkVisualizer.init();
    }

    async probeNetwork() {
        const networkData = await this.networkProbe.collectData();
        return networkData;
    }

    async sniffNetworkTraffic() {
        const networkTraffic = await this.networkSniffer.captureTraffic();
        return networkTraffic;
    }

    async analyzeNetworkData(data) {
        const analysisResults = await this.networkAnalyzer.analyzeData(data);
        return analysisResults;
    }

    async visualizeNetworkTopology() {
        const networkTopology = await this.networkVisualizer.visualizeTopology();
        return networkTopology;
    }

    async detectNetworkAnomalies() {
        const anomalies = await this.networkAnalyzer.detectAnomalies();
        return anomalies;
    }
}

export default NetworkMonitor;
