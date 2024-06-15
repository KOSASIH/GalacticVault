// interfaces/IOmniFusionToken.sol
pragma solidity ^0.8.0;

interface IOmniFusionToken {
    // Events
    event Transfer(address indexed from, address indexed to, uint256 amount);
    event Approval(address indexed owner, address indexed spender, uint256 amount);
    event Mint(address indexed to, uint256 amount);
    event Burn(address indexed from, uint256 amount);
    event Freeze(address indexed account, bool frozen);
    event Unfreeze(address indexed account, bool unfrozen);

    // Functions
    function totalSupply() external view returns (uint256);
    function balanceOf(address owner) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);
    function transfer(address to, uint256 amount) external;
    function approve(address spender, uint256 amount) external;
    function transferFrom(address from, address to, uint256 amount) external;
    function mint(address to, uint256 amount) external;
    function burn(address from, uint256 amount) external;
    function freeze(address account, bool frozen) external;
    function unfreeze(address account, bool unfrozen) external;
    function isFrozen(address account) external view returns (bool);
    function getFrozenAccounts() external view returns (address[] memory);
}
