pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";

contract Node {
    // Node address
    address public nodeAddress;

    // Node balance
    uint256 public balance;

    // Event emitted when the node's balance is updated
    event UpdateBalance(uint256 balance);

    // Function to update the node's balance
    function updateBalance(uint256 _balance) public {
        require(!paused(), "Node is paused");
        require(_balance > 0, "Invalid balance");
        balance = _balance;
        emit UpdateBalance(_balance);
    }
}
