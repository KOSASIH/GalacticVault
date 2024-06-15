pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";

contract CryptoGateway {
    address public owner;
    mapping (address => uint256) public cryptoBalances;

    constructor() public {
        owner = msg.sender;
    }

    function depositCrypto(uint256 amount, address cryptoAddress) public {
        cryptoBalances[cryptoAddress] += amount;
    }

    function withdrawCrypto(uint256 amount, address cryptoAddress) public {
        require(cryptoBalances[cryptoAddress] >= amount, "Insufficient crypto balance");
        cryptoBalances[cryptoAddress] -= amount;
    }

    function getCryptoBalance(address cryptoAddress) public view returns (uint256) {
        return cryptoBalances[cryptoAddress];
    }
}
