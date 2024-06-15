// interfaces/IBankingSystem.sol
pragma solidity ^0.8.0;

interface IBankingSystem {
    // Events
    event Deposit(address indexed user, uint256 amount, bytes32 reference);
    event Withdrawal(address indexed user, uint256 amount, bytes32 reference);
    event Transfer(address indexed from, address indexed to, uint256 amount, bytes32 reference);
    event AccountCreated(address indexed user, uint256 timestamp);
    event AccountUpdated(address indexed user, uint256 timestamp);

    // Functions
    function deposit(uint256 amount, bytes32 reference) external;
    function withdraw(uint256 amount, bytes32 reference) external;
    function transfer(address to, uint256 amount, bytes32 reference) external;
    function getBalance(address user) external view returns (uint256);
    function getUserDepositHistory(address user) external view returns (uint256[] memory);
    function getUserWithdrawalHistory(address user) external view returns (uint256[] memory);
    function getUserTransferHistory(address user) external view returns (uint256[] memory);
    function createAccount(address user, uint256 initialBalance) external;
    function updateAccount(address user, uint256 newBalance) external;
    function getAccountInfo(address user) external view returns (uint256 balance, uint256 timestamp);
    function getAccountHistory(address user) external view returns (uint256[] memory);
}
