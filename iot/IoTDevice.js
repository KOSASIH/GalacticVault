import { MicroController } from 'micro-controller';
import { SensorArray } from 'sensor-array';
import { CommunicationModule } from 'communication-module';
import { ArtificialIntelligence } from 'artificial-intelligence';
import { EdgeComputing } from 'edge-computing';

class IoTDevice {
    constructor() {
        this.microController = new MicroController();
        this.sensorArray = new SensorArray();
        this.communicationModule = new CommunicationModule();
        this.artificialIntelligence = new ArtificialIntelligence();
        this.edgeComputing = new EdgeComputing();
    }

    async init() {
        await this.microController.init();
        await this.sensorArray.init();
        await this.communicationModule.init();
        await this.artificialIntelligence.init();
        await this.edgeComputing.init();
    }

    async collectData() {
        const sensorData = await this.sensorArray.collectData();
        const processedData = await this.artificialIntelligence.processData(sensorData);
        return processedData;
    }

    async transmitData(data) {
        await this.communicationModule.transmitData(data);
    }

    async receiveCommand(command) {
        await this.microController.executeCommand(command);
    }

    async performEdgeComputing(data) {
        const edgeComputedData = await this.edgeComputing.compute(data);
        return edgeComputedData;
    }
}

export default IoTDevice;
