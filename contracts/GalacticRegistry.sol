pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/security/Pausable.sol";

contract GalacticRegistry is Pausable {
    // Mapping of vault implementations to their respective metadata
    mapping(address => VaultMetadata) public vaultMetadata;

    // Event emitted when a new vault implementation is registered
    event RegisterVault(address indexed implementation, VaultMetadata metadata);

    // Struct representing vault metadata
    struct VaultMetadata {
        string name;
        string version;
        string description;
    }

    // Function to register a new vault implementation
    function registerVault(address _implementation, string memory _name, string memory _version, string memory _description) public {
        require(!paused(), "Registry is paused");
        require(_implementation != address(0), "Invalid implementation address");
        require(_name != "", "Name cannot be empty");
        require(_version != "", "Version cannot be empty");
        require(_description != "", "Description cannot be empty");
        vaultMetadata[_implementation] = VaultMetadata(_name, _version, _description);
        emit RegisterVault(_implementation, vaultMetadata[_implementation]);
    }

    // Function to get the metadata for a vault implementation
    function getVaultMetadata(address _implementation) public view returns (VaultMetadata memory) {
        return vaultMetadata[_implementation];
    }
}
