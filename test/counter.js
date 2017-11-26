var Counter = artifacts.require("Counter.sol");

contract('Counter', function(accounts) {
  it("should assert true", function(done) {
    var counter = Counter.deployed();
    assert.isTrue(true);
    done();
  });
});
