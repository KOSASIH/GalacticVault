pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/oracle/Oracle.sol";
import "./GalacticRegistry.sol";

contract GalacticOracle is Oracle {
    // Mapping of oracles to their respective data feeds
    mapping(address => DataFeed) public dataFeeds;

    // Event emitted when a new data feed is registered
    event RegisterDataFeed(address indexed oracle, DataFeed dataFeed);

    // Struct representing a data feed
    struct DataFeed {
        string name;
        string description;
        uint256 frequency; // in seconds
        uint256[] data; // array of uint256 values
    }

    // Function to register a new data feed
    function registerDataFeed(address _oracle, string memory _name, string memory _description, uint256 _frequency) public {
        require(!paused(), "Oracle is paused");
        require(_oracle!= address(0), "Invalid oracle address");
        require(_name!= "", "Name cannot be empty");
        require(_description!= "", "Description cannot be empty");
        DataFeed storage dataFeed = dataFeeds[_oracle];
        dataFeed.name = _name;
        dataFeed.description = _description;
        dataFeed.frequency = _frequency;
        emit RegisterDataFeed(_oracle, dataFeed);
    }

    // Function to update a data feed
    function updateDataFeed(address _oracle, uint256[] memory _data) public {
        require(!paused(), "Oracle is paused");
        require(_oracle!= address(0), "Invalid oracle address");
        DataFeed storage dataFeed = dataFeeds[_oracle];
        require(dataFeed.frequency > 0, "Data feed frequency not set");
        require(_data.length > 0, "Invalid data array");
        dataFeed.data = _data;
        emit UpdateDataFeed(_oracle, dataFeed);
    }

    // Function to get the latest data from a data feed
    function getLatestData(address _oracle) public view returns (uint256[] memory) {
        DataFeed storage dataFeed = dataFeeds[_oracle];
        return dataFeed.data;
    }
}
