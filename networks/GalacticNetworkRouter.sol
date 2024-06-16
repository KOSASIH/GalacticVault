pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/router/Router.sol";
import "./GalacticNetworkRegistry.sol";

contract GalacticNetworkRouter is Router {
    // Mapping of network routes to their respective destinations
    mapping(bytes32 => address) public networkRoutes;

    // Event emitted when a new network route is registered
    event RegisterNetworkRoute(bytes32 indexed route, address destination);

    // Function to register a new network route
    function registerNetworkRoute(bytes32 _route, address _destination) public {
        require(!paused(), "Router is paused");
        require(_route!= 0, "Invalid route");
        require(_destination!= address(0), "Invalid destination address");
        networkRoutes[_route] = _destination;
        emit RegisterNetworkRoute(_route, _destination);
    }

    // Function to get the destination for a given network route
    function getNetworkDestination(bytes32 _route) public view returns (address) {
        return networkRoutes[_route];
    }

    // Function to route a message to its destination through the network
    function routeNetworkMessage(bytes32 _route, bytes memory _message) public {
        address destination = getNetworkDestination(_route);
        require(destination!= address(0), "Route not found");
        destination.call(_message);
    }
}
