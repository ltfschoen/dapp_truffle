var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");

// Run deployment steps conditional on network being deployed to
// and list of accounts provided by Ethereum Client and Web3 provider.
// Note:
// - `accounts` parameter provides same as `web3.eth.getAccounts()`
// - `deployer.deploy` - deploys specific contract specified by contract object 
//   and is useful for singleton contracts (where only one instance exists for Dapp).
//   It sets `Contract.address` to the newly deployed contract address.
//   Optionally pass a list of contracts.
//   Optional argument of `overwrite` whe set to `false` prevents deploying
//   contract if one already previously deployed (useful when contract address
//   provided by external dependency)
// - `deployer.link` - deploys and links any previously deployed library to a 
//   destination contract or multiple contracts that depend on it
//   before calling `deployer.deploy`
//   
// Tips:
// - Run migrations dependent on existence of networ artifacts 
//   http://truffleframework.com/docs/getting_started/packages-ethpm
module.exports = function(deployer, network, accounts) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  if (network == "live") {
    // specific actions to network named "live".
  }
  console.log("Deploying Contract on Network: ", network);
  // 
  console.log("Deploying Contract on using Accounts: ", accounts);
};
