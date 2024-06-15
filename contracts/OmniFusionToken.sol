pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";

contract OmniFusionToken {
    address public owner;
    uint256 public totalSupply;
    mapping (address => uint256) public balances;

    constructor() public {
        owner = msg.sender;
        totalSupply = 100000000000 * (10 ** 18); // 1 million tokens with 18 decimals
        balances[owner] = totalSupply;
    }

    function transfer(address recipient, uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficientbalance");
        balances[msg.sender] -= amount;
        balances[recipient] += amount;
    }

    function getBalance(address user) public view returns (uint256) {
        return balances[user];
    }
}
