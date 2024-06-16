pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/router/Router.sol";
import "./GalacticRegistry.sol";

contract GalacticGatewayRouter is Router {
    // Mapping of gateway routes to their respective destinations
    mapping(bytes32 => address) public gatewayRoutes;

    // Event emitted when a new gateway route is registered
    event RegisterGatewayRoute(bytes32 indexed route, address destination);

    // Function to register a new gateway route
    function registerGatewayRoute(bytes32 _route, address _destination) public {
        require(!paused(), "Router is paused");
        require(_route!= 0, "Invalid route");
        require(_destination!= address(0), "Invalid destination address");
        gatewayRoutes[_route] = _destination;
        emit RegisterGatewayRoute(_route, _destination);
    }

    // Function to get the destination for a given gateway route
    function getGatewayDestination(bytes32 _route) public view returns (address) {
        return gatewayRoutes[_route];
    }

    // Function to route a message to its destination through the gateway
    function routeGatewayMessage(bytes32 _route, bytes memory _message) public {
        address destination = getGatewayDestination(_route);
        require(destination!= address(0), "Route not found");
        destination.call(_message);
    }
}
