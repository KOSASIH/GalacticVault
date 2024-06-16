pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC721/SafeERC721.sol";
import "./GalacticVault.sol";

contract ERC721Vault is GalacticVault {
    // Mapping of ERC-721 tokens to their respective owners
    mapping(address => mapping(uint256 => address)) public tokenOwners;

    //Event emitted when a new ERC-721 token is deposited into a vault
    event DepositERC721(address indexed owner, address indexed vault, uint256 tokenId);

    // Event emitted when an ERC-721 token is withdrawn from a vault
    event WithdrawalERC721(address indexed owner, address indexed vault, uint256 tokenId);

    // Function to deposit an ERC-721 token into a vault
    function depositERC721(address _vault, uint256 _tokenId) public {
        require(_tokenId > 0, "Invalid token ID");
        require(SafeERC721(_vault).ownerOf(_tokenId) == msg.sender, "Not the owner of the token");
        Vault storage vault = vaults[msg.sender][_vault];
        vault.assets[_tokenId] = _tokenId;
        tokenOwners[_vault][_tokenId] = msg.sender;
        emit DepositERC721(msg.sender, _vault, _tokenId);
    }

    // Function to withdraw an ERC-721 token from a vault
    function withdrawERC721(address _vault, uint256 _tokenId) public {
        require(_tokenId > 0, "Invalid token ID");
        require(SafeERC721(_vault).ownerOf(_tokenId) == address(this), "Not the owner of the token");
        Vault storage vault = vaults[msg.sender][_vault];
        require(vault.assets[_tokenId] == _tokenId, "Token not found in vault");
        SafeERC721(_vault).transferFrom(address(this), msg.sender, _tokenId);
        delete vault.assets[_tokenId];
        delete tokenOwners[_vault][_tokenId];
        emit WithdrawalERC721(msg.sender, _vault, _tokenId);
    }

    // Function to get the owner of an ERC-721 token in a vault
    function getTokenOwner(address _vault, uint256 _tokenId) public view returns (address) {
        return tokenOwners[_vault][_tokenId];
    }
}
