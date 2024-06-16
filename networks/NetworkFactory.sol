pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/factory/Factory.sol";

contract NetworkFactory is Factory {
    // Mapping of network IDs to their respective network contracts
    mapping(uint256 => address) public networks;

    // Event emitted when a new network is created
    event CreateNetwork(uint256 indexed networkId, address networkAddress);

    // Function to create a new network
    function createNetwork(uint256 _networkId, string memory _name, string memory _description) public {
        require(!paused(), "Factory is paused");
        require(_networkId > 0, "Invalid network ID");
        require(_name!= "", "Name cannot be empty");
        require(_description!= "", "Description cannot be empty");
        address networkAddress = address(new Network(_networkId, _name, _description));
        networks[_networkId] = networkAddress;
        emit CreateNetwork(_networkId, networkAddress);
    }
}
