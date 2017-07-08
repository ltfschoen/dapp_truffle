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
			* Compile Contract Latest: `truffle compile` (only changes since last compile)
			* Compile Contract Full: `truffle compile --compile-all` (full compile)
		
		* Migrate: `truffle migrate`
		
		* Test: `truffle test`

* Project Structure

	* app/
		* Usage - App files by default (JS, styles)
	
	* build/contracts
		* Usage - Artifacts of compilation for deployment

	* contracts/
		* Usage - Truffle expects to finds solidity contracts
		* Contents
			* Solidity Contract file http://solidity.readthedocs.io/en/latest/contracts.html
			* Solidity Library file http://solidity.readthedocs.io/en/latest/contracts.html#libraries
		* Examples
			* Default Project
				* MetaCoin
					* About - Demo app called MetaCoin which is a coin-like contract that acts like alt-coin built inside Ethereum
					* Limitations 
						* Not standards compatible or able to talk to other coin/contracts
					* Opportunities - Convert to standards compatible https://github.com/ConsenSys/Tokens

	* migrations/
		* Usage - Scriptable deployment files
	
	* test/
		* Usage - Test files for testing app and contracts
	
	* truffle.js
		* Main Truffle config file.

* Guide
	* Truffle
		* * Guide https://truffle.readthedocs.io/en/develop

* TODO
	* [ ] - Import dependencies http://solidity.readthedocs.io/en/latest/layout-of-source-files.html#importing-other-source-files
	* [ ] - Interact with Ethereum.js Test RPC
	* [ ] - Convert to standards compatible https://github.com/ConsenSys/Tokens