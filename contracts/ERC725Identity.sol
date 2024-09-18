pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract ERC725Identity is Ownable {
    mapping (address => bytes32) public identity;

    function setIdentity(bytes32 _identity) public onlyOwner {
        identity[msg.sender] = _identity;
    }

    function getIdentity(address _address) public view returns (bytes32) {
        return identity[_address];
    }
}
