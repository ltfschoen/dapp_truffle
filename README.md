* Original Setup
  * Guide https://truffle.readthedocs.io/en/develop
  * Install Truffle https://truffle.readthedocs.io/en/develop/getting_started/installation/
      ```
      npm install -g truffle
      ```
  * Install Ethereum TestRPC Client https://truffle.readthedocs.io/en/develop/getting_started/client/
      * https://github.com/ethereumjs/testrpc
      ```
      npm install -g ethereumjs-testrpc
      ```
  * Create Truffle Dapp https://truffle.readthedocs.io/en/develop/getting_started/project/
      ```
      mkdir dapp_truffle; cd dapp_truffle; truffle init
      ```
  * Compile https://truffle.readthedocs.io/en/develop/getting_started/compile/
      * Solidity Contracts http://solidity.readthedocs.org/en/latest/contracts.html
          * http://solidity.readthedocs.io/en/latest/contracts.html#libraries

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

	* Run Truffle

		* Compile:
			* Compile Contract Latest - `truffle compile` (only changes since last compile)
			* Compile Contract Full - `truffle compile --compile-all` (full compile)
		
		* Build Front-end:
			* Build Artifacts - `truffle build` (requires Default or Custom Builder to be configured)

		* Migrate: 
			* Run Migrations Latest - `truffle migrate`
			* Run Migrations Full - `truffle migrate --reset`
			* Run Migration on specific network called 'live' defined in truffle.js - `truffle migrate --network live`
		
		* Test: `truffle test`

* Project Structure

	* app/
		* Usage - App files by default (JS, styles)
	
	* build/contracts
		* Usage - Artifacts of compilation for deployment. 

	* build/
		* References
			* truffle.js comments
			* https://truffle.readthedocs.io/en/develop/getting_started/build/
			* http://truffle.readthedocs.io/en/develop/advanced/configuration/
		* Options	- configured in `truffle.js`
			* Default Builder - https://truffle.readthedocs.io/en/develop/getting_started/build/
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
				* Reference - https://truffle.readthedocs.io/en/develop/getting_started/migrations/
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
			* Option to conditionallly run deployment tasks depending on Network https://truffle.readthedocs.io/en/develop/getting_started/migrations/
		* References
			* https://truffle.readthedocs.io/en/develop/getting_started/migrations/
	
	* test/
		* Usage - Test files for testing app and contracts
	
	* truffle.js
		* Main Truffle config file.

* Guide
	* Truffle
		* * Guide https://truffle.readthedocs.io/en/develop

* TODO
	* [ ] - Fix functionality of `truffle build` to resolve error. Await response from question posted in Truffle forum https://gitter.im/ConsenSys/truffle
		```
		Error building:

		Build configuration can no longer be specified as an object. Please see our documentation for an updated list of supported build configurations.

		Build failed. See above.
		```
	* [ ] - Import dependencies http://solidity.readthedocs.io/en/latest/layout-of-source-files.html#importing-other-source-files
	* [ ] - Interact with Ethereum.js Test RPC
	* [ ] - Convert to standards compatible https://github.com/ConsenSys/Tokens
	* [ ] - Run deployment tasks depending on Network https://truffle.readthedocs.io/en/develop/getting_started/migrations/