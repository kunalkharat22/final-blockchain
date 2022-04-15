var HelloWorld = artifacts.require("./HelloWorld.sol");
var Election = artifacts.require("./Election.sol");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
  deployer.deploy(Election);
};
