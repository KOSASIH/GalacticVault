pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/registry/Registry.sol";

contract GalacticNetworkRegistry is Registry {
    // Mapping of network IDs to their respective configurations
    mapping(uint256 => NetworkConfig) public networkConfigs;

    // Event emitted when a new network configuration is registered
    event RegisterNetworkConfig(uint256 indexed networkId, NetworkConfig config);

    // Struct representing a network configuration
    struct NetworkConfig {
        string name;
        string description;
        uint256[] supportedProtocols; // array of protocol IDs
        uint256[] supportedCurrencies; // array of currency IDs
    }

    // Function to register a new network configuration
    function registerNetworkConfig(uint256 _networkId, string memory _name, string memory _description, uint256[] memory _supportedProtocols, uint256[] memory _supportedCurrencies) public {
        require(!paused(), "Registry is paused");
        require(_networkId > 0, "Invalid network ID");
        require(_name!= "", "Name cannot be empty");
        require(_description!= "", "Description cannot be empty");
        NetworkConfig storage config = networkConfigs[_networkId];
        config.name = _name;
        config.description = _description;
        config.supportedProtocols = _supportedProtocols;
        config.supportedCurrencies = _supportedCurrencies;
        emit RegisterNetworkConfig(_networkId, config);
    }

    // Function to get the network configuration for a given network ID
    function getNetworkConfig(uint256 _networkId) public view returns (NetworkConfig memory) {
        return networkConfigs[_networkId];
    }
}
