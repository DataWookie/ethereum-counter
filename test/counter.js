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
  	// Create a variable in this scope so that the contract is visible in all then() blocks. Initialise below.
  	var counter;

  	Counter.new({ from: web3.eth.accounts[0] }).then(
  		function(instance) {
  			counter = instance;

  			return counter.increment()
  		}).then(
  		function() {
  			return counter.get.call()  			
  		}).then(
  		function(count) {
  			assert.equal(count, 1, "Counter should have been incremented to one!");

  			return counter.increment()
  		}).then(
  		function() {
  			return counter.get.call()
  		}).then(
  		function(count) {
  			assert.equal(count, 2, "Counter should have been incremented to two!");
  			done()
  		})
  });
  it("Reset counter.", function(done) {
  	var counter;

  	Counter.new({ from: web3.eth.accounts[0] }).then(
  		function(instance) {
  			counter = instance;

  			counter.increment()
  		}).then(
  		function() {
  			counter.set(0)
  		}).then(
  		function() {
  			return counter.get.call()
  		}).then(
  		function(count) {
  			assert.equal(count, 0, "Counter should have been reset to zero!");
  			done()
  		})
  });
});