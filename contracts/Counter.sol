pragma solidity ^0.4.4;

contract Counter {
    address creator;
    uint counter;

    function Incrementer() public
    {
        creator = msg.sender; 
        counter = 0;
    }

    function increment() public
    {
        counter = counter + 1;
    }

    function get() public constant returns (uint)
    {
        return counter;
    }

    // Kills this contract and sends remaining funds back to creator.
    //
    function kill() public
    { 
        if (msg.sender == creator)
        selfdestruct(creator);  
    }
}