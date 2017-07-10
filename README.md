* Original Setup

  * Guide for Truffle >v3 http://truffleframework.com/docs/
  	* Warning: Deprecated guide for Truffle v1 and v2 at this link https://truffle.readthedocs.io/en/develop

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

* Truffle Interactive Console (REPL) 
	* Run REPL on specified network and log communication between Truffle and the RPC
		```
		truffle console --network <name> --verbose-rpc
		```
	* Reference: http://truffleframework.com/docs/getting_started/console

* Setup

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

  * Install relevant Node.js version 	
  	```
  	nvm install
  	```

	* Run Truffle Dapp

  	* Run Ethereum Client 
  		* [ethereumjs-testrpc](https://github.com/ethereumjs/testrpc)
  		* Served on http://localhost:8545

		* Deploy Contracts onto Network of choice (i.e. "development") defined in truffle.js

			* Compile: - http://truffleframework.com/docs/getting_started/compile
				* Compile Contract Latest - `truffle compile` (only changes since last compile)
				* Compile Contract Full - `truffle compile --compile-all` (full compile)

			* Migrate: 
				* Run Migrations Latest - `truffle migrate`
				* Run Migrations Full - `truffle migrate --reset`
				* Run Contracts from specific Migration - `truffle migrate -f <number>`
				* Run Migration on specific network called 'live' defined in truffle.js - `truffle migrate --network live`
		
		* Dapp installation of NPM Dependencies from package.json into directory node_modules/ `npm install`

		* Dapp installation of [EthPM](https://www.ethpm.com/) Dependencies from ethpm.json into directory installed_contracts/ `truffle install` (or `truffle install <package name>@<version>)
			* Note:	
				* Truffle search installed packages from EthPM first before searching for packages installed from NPM, so in the rare case of a naming conflict the package installed via EthPM is used
			* References
				* NPM http://truffleframework.com/docs/getting_started/packages-npm
				* EthPM http://truffleframework.com/docs/getting_started/packages-ethpm

  	* Dapp Server
  		* Build App and Run Dev Server: `npm run dev` (so changes are re-built automatically)
  			* Served at http://localhost:8080

		* Dapp Front-end:
			* Build Artifacts (requires Default or Custom Builder such as Webpack to be configured)
				```
				npm run build
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

* Writing Tests
	* JavaScript Tests (Mocha, Chai) - http://truffleframework.com/docs/getting_started/javascript-tests
	* Solidity Contract Tests - http://truffleframework.com/docs/getting_started/solidity-tests

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
		*  http://truffleframework.com/docs/getting_started/packages-ethpm
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
	* [ ] - Read Truffle Init Webpack documentation https://github.com/trufflesuite/truffle-init-webpack
	* [ ] - Experiment with Ethereum TestRPC
	* [ ] - Integrate Webpack hotloader to sense when contracts or javascript have been recompiled and rebuild the app
	* [ ] - Import dependencies http://solidity.readthedocs.io/en/latest/layout-of-source-files.html#importing-other-source-files
	* [ ] - Interact with Ethereum.js Test RPC
	* [ ] - Deploy Custom Smart Contract Package to EthPM http://truffleframework.com/docs/getting_started/packages-ethpm
	* [ ] - Write JavaScript Tests
	* [ ] - Write Solidity Tests
	* [ ] - Check `truffle watch` integrated
	* [ ] - Convert to standards compatible https://github.com/ConsenSys/Tokens
	* [X] - Run deployment tasks depending on Network

* Credits
	* Build based on [truffle-init-webpack](https://github.com/trufflesuite/truffle-init-webpack by Douglas von Kohorn)