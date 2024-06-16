pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";

contract Network {
    // Network ID
    uint256 public networkId;

    // Network name
    string public name;

    // Network description
    string public description;

    // Mapping of nodes to their respective balances
    mapping(address => uint256) public nodeBalances;

    // Event emitted when a node joins the network
    event JoinNetwork(address indexed node, uint256 balance);

    // Event emitted when a node leaves the network
    event LeaveNetwork(address indexed node, uint256 balance);

    // Function to join the network
    function joinNetwork(address _node, uint256 _balance) public {
        require(!paused(), "Network is paused");
        require(_node!= address(0), "Invalid node address");
        require(_balance > 0, "Invalid balance");
        nodeBalances[_node] = _balance;
        emit JoinNetwork(_node, _balance);
    }

    // Function to leave the network
    function leaveNetwork(address _node) public {
        require(!paused(), "Network is paused");
        require(_node!= address(0), "Invalid node address");
        uint256 balance = nodeBalances[_node];
        nodeBalances[_node] = 0;
        emit LeaveNetwork(_node, balance);
    }
}
