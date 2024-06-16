pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";
import "./GalacticRegistry.sol";

contract GalacticToken is SafeERC20 {
    // Mapping of token holders to their respective balances
    mapping(address => uint256) public balances;

    // Event emitted when a new token is minted
    event Mint(address indexed holder, uint256 amount);

    // Event emitted when a token is transferred
    event Transfer(address indexed from, address indexed to, uint256 amount);

    // Function to mint new tokens
    function mint(address _holder, uint256 _amount) public {
        require(!paused(), "Token is paused");
        require(_holder!= address(0), "Invalid holder address");
        require(_amount > 0, "Invalid amount");
        balances[_holder] += _amount;
        emit Mint(_holder, _amount);
    }

    // Function to transfer tokens
    function transfer(address _from, address _to, uint256 _amount) public {
        require(!paused(), "Token is paused");
        require(_from!= address(0), "Invalid from address");
        require(_to!= address(0), "Invalid to address");
        require(_amount> 0, "Invalid amount");
        require(balances[_from] >= _amount, "Insufficient balance");
        balances[_from] -= _amount;
        balances[_to] += _amount;
        emit Transfer(_from, _to, _amount);
    }

    // Function to get the balance of a token holder
    function balanceOf(address _holder) public view returns (uint256) {
        return balances[_holder];
    }
}
