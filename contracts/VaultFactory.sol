pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/proxy/TransparentUpgradeableProxy.sol";
import "./GalacticVault.sol";

contract VaultFactory {
    // Mapping of vault implementations to their respective proxies
    mapping(address => address) public vaultProxies;

    // Event emitted when a new vault proxy is created
    event NewVaultProxy(address indexed implementation, address indexed proxy);

    // Function to create a new vault proxy
    function createVaultProxy(address _implementation) public {
        require(_implementation!= address(0), "Invalid implementation address");
        TransparentUpgradeableProxy proxy = new TransparentUpgradeableProxy(_implementation, address(this));
        vaultProxies[_implementation] = address(proxy);
        emit NewVaultProxy(_implementation, address(proxy));
    }

    // Function to get the proxy address for a given implementation
    function getProxy(address _implementation) public view returns (address) {
        return vaultProxies[_implementation];
    }
}
