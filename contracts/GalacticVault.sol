pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC721/SafeERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/access/AccessControl.sol";

contract GalacticVault {
    using SafeERC721 for address;
    using AccessControl for address;

    // Mapping of vaults to their respective owners
    mapping(address => mapping(address => Vault)) public vaults;

    // Event emitted when a new vault is created
    event NewVault(address indexed owner, address indexed vault);

    // Event emitted when an asset is deposited into a vault
    event Deposit(address indexed owner, address indexed vault, uint256 amount);

    // Event emitted when an asset is withdrawn from a vault
    event Withdrawal(address indexed owner, address indexed vault, uint256 amount);

    // Struct representing a vault
    struct Vault {
        address owner;
        uint256 balance;
        mapping(address => uint256) assets;
    }

    // Modifier to restrict access to vault owners only
    modifier onlyVaultOwner(address _vault) {
        require(msg.sender == vaults[_vault].owner, "Only the vault owner can perform this action");
        _;
    }

    // Function to create a new vault
    function createVault(address _owner) public {
        require(_owner!= address(0), "Invalid owner address");
        Vault storage newVault = vaults[_owner][address(this)];
        newVault.owner = _owner;
        emit NewVault(_owner, address(this));
    }

    // Function to deposit assets into a vault
    function deposit(address _vault, uint256 _amount) public onlyVaultOwner(_vault) {
        require(_amount > 0, "Invalid deposit amount");
        Vault storage vault = vaults[_vault][address(this)];
        vault.balance += _amount;
        vault.assets[msg.sender] += _amount;
        emit Deposit(msg.sender, _vault, _amount);
    }

    // Function to withdraw assets from a vault
    function withdraw(address _vault, uint256 _amount) public onlyVaultOwner(_vault) {
        require(_amount > 0, "Invalid withdrawal amount");
        Vault storage vault = vaults[_vault][address(this)];
        require(vault.balance >= _amount, "Insufficient balance");
        vault.balance -= _amount;
        vault.assets[msg.sender] -= _amount;
        emit Withdrawal(msg.sender, _vault, _amount);
    }

    // Function to get the balance of a vault
    function getBalance(address _vault) public view returns (uint256) {
        return vaults[_vault][address(this)].balance;
    }

    // Function to get the assets stored in a vault
    function getAssets(address _vault) public view returns (address[] memory) {
        Vault storage vault = vaults[_vault][address(this)];
        address[] memory assets = new address[](vault.assets.length);
        for (uint256 i = 0; i < vault.assets.length; i++) {
            assets[i] = vault.assets[i];
        }
        return assets;
    }
}
