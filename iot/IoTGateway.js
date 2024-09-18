import { NetworkRouter } from 'network-router';
import { DataProcessor } from 'data-processor';
import { CloudConnector } from 'cloud-connector';
import { SecurityModule } from 'security-module';
import { IoTDeviceManager } from 'iot-device-manager';

class IoTGateway {
    constructor() {
        this.networkRouter = new NetworkRouter();
        this.dataProcessor = new DataProcessor();
        this.cloudConnector = new CloudConnector();
        this.securityModule = new SecurityModule();
        this.iotDeviceManager = new IoTDeviceManager();
    }

    async init() {
        await this.networkRouter.init();
        await this.dataProcessor.init();
        await this.cloudConnector.init();
        await this.securityModule.init();
        await this.iotDeviceManager.init();
    }

    async receiveDataFromDevice(data) {
        const processedData = await this.dataProcessor.processData(data);
        await this.cloudConnector.sendDataToCloud(processedData);
    }

    async sendCommandToDevice(deviceId, command) {
        await this.iotDeviceManager.sendCommandToDevice(deviceId, command);
    }

    async manageDevices() {
        await this.iotDeviceManager.manageDevices();
    }

    async secureDataTransmission(data) {
        const encryptedData = await this.securityModule.encryptData(data);
        return encryptedData;
    }
}

export default IoTGateway;
