pragma solidity ^0.4.4;

contract Counter {
    address public creator;
    uint counter;

    function Counter() public
    {
        creator = msg.sender; 
        counter = 0;
    }

    function increment() public
    {
        counter = counter + 1;
    }

    modifier onlyCreator() {
        require(msg.sender == creator);
        _;
    } 

    function set(uint value) onlyCreator public
    {
        counter = value;
    }

    function get() public constant returns (uint)
    {
        return counter;
    }

    function kill() public
    { 
        if (msg.sender == creator)
        selfdestruct(creator);  
    }
}
