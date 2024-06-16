pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/access/AccessControl.sol";
import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";
import "./GalacticRegistry.sol";

contract GalacticGateway is AccessControl, SafeERC20 {
    // Mapping of gateway configurations to their respective settings
    mapping(address => GatewayConfig) public gatewayConfigs;

    // Event emitted when a new gateway configuration is registered
    event RegisterGatewayConfig(address indexed gateway, GatewayConfig config);

    // Struct representing a gateway configuration
    struct GatewayConfig {
        string name;
        string description;
        uint256 fee; // in wei
        uint256[] supportedTokens; // array of ERC-20 token addresses
    }

    // Function to register a new gateway configuration
    function registerGatewayConfig(address _gateway, string memory _name, string memory _description, uint256 _fee, uint256[] memory _supportedTokens) public {
        require(!paused(), "Gateway is paused");
        require(_gateway!= address(0), "Invalid gateway address");
        require(_name!= "", "Name cannot be empty");
        require(_description!= "", "Description cannot be empty");
        require(_fee > 0, "Fee must be greater than 0");
        require(_supportedTokens.length > 0, "Supported tokens array cannot be empty");
        GatewayConfig storage config = gatewayConfigs[_gateway];
        config.name = _name;
        config.description = _description;
        config.fee = _fee;
        config.supportedTokens = _supportedTokens;
        emit RegisterGatewayConfig(_gateway, config);
    }

    // Function to get the gateway configuration for a given gateway
    function getGatewayConfig(address _gateway) public view returns (GatewayConfig memory) {
        return gatewayConfigs[_gateway];
    }

    // Function to process a payment through the gateway
    function processPayment(address _gateway, uint256 _amount, uint256 _token) public {
        require(!paused(), "Gateway is paused");
        require(_gateway!= address(0), "Invalid gateway address");
        require(_amount > 0, "Amount must be greater than 0");
        require(_token > 0, "Token must be greater than 0");
        GatewayConfig storage config = gatewayConfigs[_gateway];
        require(config.supportedTokens[_token] == _token, "Token not supported by gateway");
        // Process payment logic here
    }
}
