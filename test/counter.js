var Counter = artifacts.require("Counter.sol");

// This is just a boilerplate test.
//
contract('Counter', function(accounts) {
  it("should assert true", function(done) {
    var counter = Counter.deployed();
    assert.isTrue(true);
    done();
  });
});

contract('Counter', function(accounts) {
  it("Initial count of zero.", function(done) {
  	Counter.new({ from: web3.eth.accounts[0] }).then(
  		function(counter) {
  			counter.get.call().then(
  				function(count) {
  					assert.equal(count, 0, "Initial count is not zero!");
  					done();
  				}
  				)
  		}
  		)
  });
  it("Increment counter.", function(done) {
  	var counter;

  	Counter.new({ from: web3.eth.accounts[0] }).then(
  		function(instance) {
  			counter = instance;
  			
  			counter.increment.sendTransaction()
  			counter.get.call().then(
  				function(count) {
  					assert.equal(count, 1, "Counter should have been incremented to one!");
  					done()
  				}
  				)
  			// counter.increment.sendTransaction()
  			// counter.get.call().then(
  			// 	function(count) {
  			// 		assert.equal(count, 1, "Counter should have been incremented to one!");
  			// 	}
  			// 	)
  			// done()
  		}
  		)
  });
});