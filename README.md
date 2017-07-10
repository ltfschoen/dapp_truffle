* Original Setup

  * Guide for Truffle >v3 http://truffleframework.com/docs/
  	* Warning: Deprecated guide for Truffle v1 and v2 at this link https://truffle.readthedocs.io/en/develop

  * Install relevant Node.js version 	
		```
		nvm use v8.0.0
		```

  * Install Truffle
      ```
      npm install -g truffle
      ```

  * Install Ethereum TestRPC Client
      * https://github.com/ethereumjs/testrpc
      * Benefits
      	* Blockchain-in-memory runs only on development machine. 
      	* Processes transactions instantly instead of waiting for default block time so can test code works quickly 
      	* Immediate feedback when smart contracts run into errors. 
      	* Ideal client for automated testing
      	* Truffle knows how to use its special features to speed up test runtime by almost 90%
      ```
      npm install -g ethereumjs-testrpc
      ```

  * Create Truffle Dapp - http://truffleframework.com/docs/getting_started/project

  	* Installs truffle-init-webpack, a webpack project with Truffle. that includes contracts, migrations, tests, user interface and webpack build pipeline.
      ```
      mkdir dapp_truffle; cd dapp_truffle; truffle unbox;
      ```

  * Compile
      * Solidity Contracts
          * http://solidity.readthedocs.io/en/latest/contracts.html#libraries

* System Info
	```
	truffle version
	```

* Setup

  * Install and switch to relevant Node.js version 	
  	```
  	nvm install
  	```

  * Install Truffle https://truffle.readthedocs.io/en/develop/getting_started/installation/
    ```
    npm install -g truffle
    ```

  * Install Ethereum TestRPC Client 
  	* https://truffle.readthedocs.io/en/develop/getting_started/client/
    * https://github.com/ethereumjs/testrpc
    ```
    npm install -g ethereumjs-testrpc
    ```

	* Run Truffle Dapp

  	* Run Ethereum Client (in separate Terminal tab)
  		* Create DB folder
  			```
  			mkdir db && mkdir db/chain_database
  			```
			* Delete DB folder if starting fresh
				```
				rm -rf ./db
				```
  		* [ethereumjs-testrpc](https://github.com/ethereumjs/testrpc)
  			* Basic `testrpc`
  			* Advanced
	  			```
					testrpc --account="0x0000000000000000000000000000000000000000000000000000000000000001, 2471238800000000000" \
					        --account="0x0000000000000000000000000000000000000000000000000000000000000002, 4471238800000000000" \
					        --unlock "0x0000000000000000000000000000000000000000000000000000000000000001" \
					        --unlock "0x0000000000000000000000000000000000000000000000000000000000000002" \
					        --blocktime 0 \
					        --deterministic true \
					        --port 8545 \
					        --hostname localhost \
					        --seed 'blah' \
					        --gasPrice 20000000000 \
					        --gasLimit 0x47E7C4 \
					        --debug true \
					        --mem true \
					        --mnemonic 'something' \
					        --db './db/chain_database' \
	  			```
  		* Served on http://localhost:8545

		* Deploy Contracts onto Network of choice (i.e. "development") defined in truffle.js

			* Compile: - http://truffleframework.com/docs/getting_started/compile
				* Compile Contract Latest - `truffle compile` (only changes since last compile)
				* Compile Contract Full - `truffle compile --compile-all` (full compile)

			* Migrate: 
				* Run Migrations Latest - `truffle migrate`
				* Run Migrations Full - `truffle migrate --reset --network development`
				* Run Contracts from specific Migration - `truffle migrate -f <number>`
				* Run Migration on specific network called 'live' defined in truffle.js - `truffle migrate --network live`
		
		* Dapp installation of NPM Dependencies from package.json into directory node_modules/ `npm install`

		* Dapp installation of [EthPM](https://www.ethpm.com/) Dependencies from ethpm.json into directory installed_contracts/ `truffle install` (or `truffle install <package name>@<version>)
			* Note:	
				* Truffle search installed packages from EthPM first before searching for packages installed from NPM, so in the rare case of a naming conflict the package installed via EthPM is used
			* References
				* NPM http://truffleframework.com/docs/getting_started/packages-npm
				* EthPM http://truffleframework.com/docs/getting_started/packages-ethpm

		* Build Dapp Front-end:
			* Build Artifacts (requires Default or Custom Builder such as Webpack to be configured)
				```
				npm run build
				``` 
				(same as `truffle build`)

  	* Run Dapp Server
  		* Build App and Run Dev Server: `npm run dev` (so changes are re-built automatically)
  			* Served at http://localhost:8080
  			* Open `open http://localhost:8080` in browser

  			* Screenshot:

  				![alt tag](https://raw.githubusercontent.com/ltfschoen/dapp_truffle/master/screenshots/gui.png)

				* Example:
					* Within browser transfer say 10 wei to Account No.  0x0000000000000000000000000000000000000000000000000000000000000001 that we created on Ethereum TestRPC

				* Check Account Balances from Terminal by loading External JavaScript file:
					```
					truffle exec './scripts/checkAllBalances.js’
					```
		
		* Watch
			* Watch for changes to contracts, app and config files. Rebuild app upon changes.
			```
			truffle watch
			```

			* Reference
				* http://truffleframework.com/docs/advanced/commands
		
		* Test: 
			```
			truffle test
			truffle test ./path/to/test/file.js
			```

		* Linter
  		* Run Linter: `npm run lint`

* Truffle Interactive Console (REPL) 
	* Run REPL on specified network and log communication between Truffle and the RPC
		```
		truffle console --network development --verbose-rpc
		```

		* Try the following commands
			```
			web3

			// Show existing MetaCoin accounts
			web3.eth.accounts

			i.e. 
				[ '0x7e5f4552091a69125d5dfcb7b8c2659029395bdf',
  				'0x2b5ad5c4795c026514f8317c7a215e218dccd6cf' ]

 			web3.eth.blockNumber
			var Web3 = require('web3');
			var web3 = new Web3.providers.HttpProvider("http://localhost:8545");
			web3.isConnected();
			var contract = require("truffle-contract");

			/*
			 * Execute Custom Contract (MetaCoin) Functions on Ethereum Network (i.e. we * previously created the following functions in MetaCoin.sol: sendCoin, 
			 * getBalanceInEth, getBalance)
			 */ 

			// Call sendCoin function to send Meta coins from one account to another. Execute as 'transaction' that persists changes to the network

			// Get reference to the 2x Ethereum Account Addresses we created on the Ethereum.js TestRPC network:
			var account_one = web3.eth.accounts[0]; // an address
			var account_two = web3.eth.accounts[1]; // another address

			// Show Account Balances 
			web3.eth.getBalance(account_one)
			web3.eth.getBalance(account_two)

			/*
			 * Call the Contract Abstraction's `sendCoin` function directly
			 * (passing a special object as the last parameter that allows Editing of
			 * specific transaction details) that results 
			 * in a 'transaction' (WRITE DATA instead of a 'call') and callback function * only fires when transaction successful
			 */
			var meta;

			// Refer to alternative better approach using `MetaCoin.at(...)`: https://github.com/trufflesuite/truffle-contract
			MetaCoin.deployed().then(function(instance) {
			  meta = instance;
			  return meta.sendCoin(account_two, 10, {from: account_one});
			}).then(function(result) {
			  // callback that when called means transaction was successfully processed
			  // Validate that triggered the Transfer event by checking logs
			  for (var i = 0; i < result.logs.length; i++) {
			    var log = result.logs[i];

			    if (log.event == "Transfer") {
			      console.log("Transaction triggered Transfer event in logs");
			      break;
			    }
			  }
			  console.log("Transaction successful with response: ", JSON.stringify(result, null, 2));
			}).catch(function(e) {
			  console.log("Error running MetaCoin.sol function sendCoin");
			})

			// IMPORTANT NOTE: COPY/PASTE BELOW INTO TRUFFLE CONSOLE (SINCE CANNOT COPY/PASTE MULTI-LINE CODE)
			var meta; MetaCoin.deployed().then(function(instance) { meta = instance; return meta.sendCoin(account_two, 10, {from: account_one}); }).then(function(result) { for (var i = 0; i < result.logs.length; i++) { var log = result.logs[i]; if (log.event == "Transfer") { console.log("Transaction triggered Transfer event in logs"); break; } }; console.log("Transaction successful with response: ", JSON.stringify(result, null, 2)); }).catch(function(e) { console.log("Error running MetaCoin.sol function sendCoin"); })

			/*
			 * Call the Contract Abstraction's `getBalance` function using 
			 * a 'call' (READ DATA instead of a 'transaction') so Ethereum network 
			 * knwos we do not intend to persist any changes, and callback function 
			 * only fires when call is successful. Instead returns a value (instead
			 * of just a Transaction ID like with 'transaction') of MetaCoin balance 
			 * as BigNumber object at address that is passed to it.
			 */
			var meta;
			MetaCoin.deployed().then(function(instance) {
			  meta = instance;
			  return meta.getBalance.call(account_one, {from: account_one});
			}).then(function(balance) {
			  // Callback is called when 'call' was successfully executed
			  // Callback returns immediately without any waiting
			  console.log("Balance is: ", balance.toNumber());
			}).catch(function(e) {
			  console.log("Error running MetaCoin.sol function getBalance");
			})

			// New Contract Abstraction deployed to Address on network
			MetaCoin.new().then(function(instance) {
			  // Print the new address
			  console.log("New Contract Abstraction deployed to network at address: ", instance.address);
			}).catch(function(err) {
				console.log("Error creating new contract abstraction: ", err);
			});

			// Existing Contract Abstraction Address - Create New Contract Abstraction using Existing Contract Address (that has already been deployed)
			var instance = MetaCoin.at("0x7e5f4552091a69125d5dfcb7b8c2659029395bdf");

			// Send Ether directly to a Contract or trigger a Contract's [Fallback function](http://solidity.readthedocs.io/en/develop/contracts.html#fallback-function)
			```
			// Send Ether / Trigger Fallback function 
			// Reference: https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethsendtransaction
			instance.sendTransaction({...}).then(function(result) {
			  // Same transaction result object as above.
			});

			// Send Ether directly to Contract using shorthand
			instance.send(web3.toWei(1, "ether")).then(function(result) {
			  // Same result object as above.
			});

	* Reference: 
		* http://truffleframework.com/docs/getting_started/console
		* https://github.com/trufflesuite/truffle-contract
		* http://truffleframework.com/docs/getting_started/contracts
		* https://github.com/ethereum/wiki/wiki/JavaScript-API
		* https://www.ethereum.org/cli

* Writing Tests
	* JavaScript Tests (Mocha, Chai) - http://truffleframework.com/docs/getting_started/javascript-tests
	* Solidity Contract Tests - http://truffleframework.com/docs/getting_started/solidity-tests

* Interaction with Contracts - http://truffleframework.com/docs/getting_started/contracts

	* 'call' (READ DATA) - Reading Data from Ethereum Network
		* Definition:
			* Calls do not change state of network
			* Calls execute code on network but no data is permanently changed
			* Calls read data
			* Calls are free to run
			* Calls when used to execute a contract function allow receiving the return value immediately
	
	* 'transaction' (WRITE DATA) - Writing Data to Ethereum Network
		* Definition:
			* Transactions change state of network
			* Transactions write/change data
			* Transactions cost Ether to run (aka 'gas') 
			* Transactions take time to process
			* Transactions only return Transaction ID, but cannot receive functions return value since transaction not processed immediately
		* Examples
			* Example (Simple): Sending Ether between accounts
			* Example (Complex): 
				* Executing Contract function (i.e. via a transaction)
				* Adding New Contract to network 

	* Truffle Contract Abstraction (i.e. [truffle-contract](https://github.com/trufflesuite/truffle-contract))
		* Definition
			* Wrapper code (over engines running under the hood) for interaction with Ethereum Contracts from JavaScript
		* Example
			* MetaCoin.sol
				* 3x functions exist (i.e. sendCoin, getBalanceInEth, and getBalance)
				* Each function executable as either `transaction` or `call`


* Contract and Migration Development

	* Helper Methods to Scaffold New Contracts, Migrations, and Tests for Contracts http://truffleframework.com/docs/advanced/commands#networks
		```
		truffle create contract MyContract
		truffle create migration MyContract
		truffle create test MyTest
		```

	* Execute a JavaScript file in Truffle environment, and include web3, and set the default provider based on the `network` argument specified, and includes contracts as global objects whilst executing script 
		```
		truffle exec /path/to/my/script.js --network <name>
		```
		* References:
			* http://truffleframework.com/docs/advanced/commands#networks
			* http://truffleframework.com/docs/getting_started/scripts

* Publishing Smart Contract Package to EthPM (Ethereum Package Registry)that is integrated into Truffle 
	
	* References:
		* http://truffleframework.com/docs/getting_started/packages-ethpm
		* http://truffleframework.com/docs/advanced/networks

	* Note: 
		* EthPM currently exists on Ropsten test network
		* List of existing Ethereum Packages https://www.ethpm.com/registry/packages

	* Show Networks `truffle networks`
		* Shows deployed addresses of all contracts on all networks

	* Pre-Publish Cleaning - `truffle networks --clean`
	(removes network artifacts not associated with named network that not want published)

	* Publish package to Ethereum Package Registry `truffle publish` (all parameters pull from project config file)

* Project Structure

	* app/
		* Usage - App files by default (JS, styles)
	
	* build/contracts
		* Usage - Artifacts of compilation for deployment. 

	* build/
		* References
			* truffle.js comments
		* Options	- configured in `truffle.js`
			* Default Builder - 
				* Important Note: in Truffle >v3.0 the Default Builder is in a separate module called truffle-default-builder. Refer to section "Usage in Truffle 3.0" at https://github.com/trufflesuite/truffle-default-builder/tree/master
				* Advantages
					* Automatically bootstraps app front-end in browser and imports compiled and deployed contract artifacts and information and Ethereum client config.
					* Control over organisation of files and folders
					* Automatically includes recommended dependencies including:
						* web3 - https://github.com/ethereum/web3.js/tree/master
						* Ether Pudding (Contract Packager) - https://github.com/trufflesuite/truffle-artifactor
						* ES6 and React.js built-in
						* Sass
						* UglyifyJS 
				* Disadvantages
					* No support for ES2015 `import` or CommonJS `require`
					* Poor integration with other build systems like Webpack
			* Custom Builder
				* Advantages
				* Disadvantages

	* contracts/
		* Usage - Truffle expects to finds solidity contracts
		* Contents
			* Solidity Contract file http://solidity.readthedocs.io/en/latest/contracts.html
			* Solidity Library file http://solidity.readthedocs.io/en/latest/contracts.html#libraries
			* Migrations Contract
				* About - Deploy this contract in first migration to use Migrations Feature. Deploy libraries before contracts
		* Examples
			* Default Project
				* MetaCoin
					* About - Demo app called MetaCoin which is a coin-like contract that acts like alt-coin built inside Ethereum
					* Limitations 
						* Not standards compatible or able to talk to other coin/contracts
					* Opportunities - Convert to standards compatible https://github.com/ConsenSys/Tokens

	* migrations/
		* Usage 
			* Scriptable deployment files for staging and deployment of contracts to Ethereum network. New migration scripts used to further evolve project on the blockchain
			* Deploy the Migrations Contract in the first migration file
			* Deployer used to stage deployment tasks synchronously or alternatively using Promise chain
			* Deploy libraries before contracts
			* Link libraries to contracts with `deployer.link` and `deployer.autolink`
			* Execute script relative to migrations file, to be run with `truffle exec` as part of deployment with `deployer.exec`
			* Option to conditionallly run deployment tasks depending on Network
		* References
			* http://truffleframework.com/docs/getting_started/migrations
	
	* test/
		* Usage - Test files for testing app and contracts
	
	* truffle.js
		* Main Truffle config file.

* QUESTIONS
	* Why does passing `--secure false` to `testrpc` result in error `Error: could not unlock signer account` even if I've already unlocked accounts to be generated

* TODO
	* [X] - Fix functionality of `truffle build` to resolve error. Await response from question posted in Truffle forum https://gitter.im/ConsenSys/truffle
		```
		Error building:

		Build configuration can no longer be specified as an object. Please see our documentation for an updated list of supported build configurations.

		Build failed. See above.
		```
		* Solution:
			* Use latest guide for Truffle >v3 http://truffleframework.com/docs/ instead of deprecated guide for Truffle v1 and v2 at this link https://truffle.readthedocs.io/en/develop
	* [ ] - Read Interacting with Contracts http://truffleframework.com/docs/getting_started/contracts
	* [ ] - Read Bootstrapping your application http://truffleframework.com/docs/getting_started/contracts
	* [ ] - Solidity Smart Contracts Guide http://solidity.readthedocs.io/en/develop/introduction-to-smart-contracts.html
	* [ ] - Build token similar to Curation Markets https://github.com/ConsenSys/curationmarkets
	* [ ] - Web3 JavaScript API Learn in-depth https://github.com/ethereum/wiki/wiki/JavaScript-API
	* [ ] - Truffle Tutorials/Blog http://truffleframework.com/tutorials/
	* [ ] - Do tutorial https://medium.com/@mvmurthy/full-stack-hello-world-voting-ethereum-dapp-tutorial-part-1-40d2d0d807c2 using web3 interface (similar to my https://github.com/ltfschoen/dapp_front_end, that provides web3 interface for managing accounts and transactions)
	* [ ] - Read this Voting system that is used at a university https://github.com/pmarella2/BroncoVotes
	* [ ] - Read Truffle Init Webpack documentation https://github.com/trufflesuite/truffle-init-webpack
	* [ ] - Experiment with Ethereum TestRPC
		* References: https://github.com/ltfschoen/dapp_front_end/blob/master/views/index.html
	* [ ] - Integrate Webpack hotloader to sense when contracts or javascript have been recompiled and rebuild the app
	* [ ] - Import dependencies http://solidity.readthedocs.io/en/latest/layout-of-source-files.html#importing-other-source-files
	* [ ] - Interact with Ethereum.js Test RPC
	* [ ] - Deploy Custom Smart Contract Package to EthPM http://truffleframework.com/docs/getting_started/packages-ethpm
	* [ ] - Write JavaScript Tests
	* [ ] - Write Solidity Tests
	* [ ] - Read Truffle Contract repo https://github.com/trufflesuite/truffle-contract
	* [ ] - Check `truffle watch` integrated
	* [ ] - Convert to standards compatible https://github.com/ConsenSys/Tokens
	* [X] - Run deployment tasks depending on Network
	* [ ] - Truffle Boxes (React.js, Redux, Uport Authentication)
	* [ ] - Ethereum Homestead Documentation http://ethdocs.org/en/latest/
	* [ ] - Ethereum Wiki https://github.com/ethereum/wiki/wiki
	* [ ] - Cryptocurrency course at Coursera https://www.coursera.org/learn/cryptocurrency#creators

* Credits
	* Build based on [truffle-init-webpack](https://github.com/trufflesuite/truffle-init-webpack by Douglas von Kohorn)