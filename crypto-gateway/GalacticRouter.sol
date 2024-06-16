pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/router/Router.sol";
import "./GalacticRegistry.sol";

contract GalacticRouter is Router {
    // Mapping of routes to their respective destinations
    mapping(bytes32 => address) public routes;

    // Event emitted when a new route is registered
    event RegisterRoute(bytes32 indexed route, address destination);

    // Function to register a new route
    function registerRoute(bytes32 _route, address _destination) public {
        require(!paused(), "Router is paused");
        require(_route!= 0, "Invalid route");
        require(_destination!= address(0), "Invalid destination address");
        routes[_route] = _destination;
        emit RegisterRoute(_route, _destination);
    }

    // Function to get the destination for a given route
    function getDestination(bytes32 _route) public view returns (address) {
        return routes[_route];
    }

    // Function to route a message to its destination
    function routeMessage(bytes32 _route, bytes memory _message) public {
        address destination = getDestination(_route);
        require(destination!= address(0), "Route not found");
        destination.call(_message);
    }
}
