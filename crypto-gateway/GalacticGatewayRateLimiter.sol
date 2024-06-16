pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/utils/RateLimiter.sol";
import "./GalacticRegistry.sol";

contract GalacticGatewayRateLimiter is RateLimiter {
    // Mapping of gateway rate limiters to their respective configurations
    mapping(address => RateLimiterConfig) public rateLimiterConfigs;

    // Event emitted when a new rate limiter configuration is registered
    event RegisterRateLimiterConfig(address indexed rateLimiter, RateLimiterConfig config);

    // Struct representing a rate limiter configuration
    struct RateLimiterConfig {
        uint256 maxRequests; // maximum number of requests per time window
        uint256 timeWindow; // time window in seconds
    }

    // Function to register a new rate limiter configuration
    function registerRateLimiterConfig(address _rateLimiter, uint256 _maxRequests, uint256 _timeWindow) public {
        require(!paused(), "Rate limiter is paused");
        require(_rateLimiter!= address(0), "Invalid rate limiter address");
        require(_maxRequests > 0, "Invalid max requests");
        require(_timeWindow > 0, "Invalid time window");
        RateLimiterConfig storage config =rateLimiterConfigs[_rateLimiter];
        config.maxRequests = _maxRequests;
        config.timeWindow = _timeWindow;
        emit RegisterRateLimiterConfig(_rateLimiter, config);
    }

    // Function to check if a request is within the rate limit
    function isWithinRateLimit(address _rateLimiter) public view returns (bool) {
        RateLimiterConfig storage config = rateLimiterConfigs[_rateLimiter];
        return isWithinRateLimitInternal(config.maxRequests, config.timeWindow);
    }
}
