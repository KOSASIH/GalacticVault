// interfaces/ICryptoGateway.sol
pragma solidity ^0.8.0;

interface ICryptoGateway {
    // Events
    event CryptoDeposit(address indexed user, uint256 amount, bytes32 cryptoAsset, bytes32 reference);
    event CryptoWithdrawal(address indexed user, uint256 amount, bytes32 cryptoAsset, bytes32 reference);
    event CryptoTransfer(address indexed from, address indexed to, uint256 amount, bytes32 cryptoAsset, bytes32 reference);
    event CryptoAssetAdded(bytes32 cryptoAsset, uint256 timestamp);
    event CryptoAssetRemoved(bytes32 cryptoAsset, uint256 timestamp);

    // Functions
    function depositCrypto(bytes32 cryptoAsset, uint256 amount, bytes32 reference) external;
    function withdrawCrypto(bytes32 cryptoAsset, uint256 amount, bytes32 reference) external;
    function transferCrypto(address to, bytes32 cryptoAsset, uint256 amount, bytes32 reference) external;
    function getCryptoBalance(address user, bytes32 cryptoAsset) external view returns (uint256);
    function getUserCryptoDepositHistory(address user, bytes32 cryptoAsset) external view returns (uint256[] memory);
    function getUserCryptoWithdrawalHistory(address user, bytes32 cryptoAsset) external view returns (uint256[] memory);
    function getUserCryptoTransferHistory(address user, bytes32 cryptoAsset) external view returns (uint256[] memory);
    function addCryptoAsset(bytes32 cryptoAsset, uint256 timestamp) external;
    function removeCryptoAsset(bytes32 cryptoAsset, uint256 timestamp) external;
    function getCryptoAssetInfo(bytes32 cryptoAsset) external view returns (uint256 balance, uint256 timestamp);
    function getCryptoAssetHistory(bytes32 cryptoAsset) external view returns (uint256[] memory);
}
