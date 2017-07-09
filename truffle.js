var DefaultBuilder = require("truffle-default-builder");

module.exports = {
  build: new DefaultBuilder() // specify the default builder configuration here.
}

module.exports = {
  /*
   * Build config of front-end that by default invokes Default Builder.
   * Alternative use `build` to use Custom Build process.
   *
   * Notes:
   * - If string specified on right hand side ends in a "/" it is interpreted as a directory
   * - All paths specified on right hand side are relative to the app/ directory
   * - Build target must only be called app.js for the Default Builder to append code to 
   */
  build: {
    // Copy ./app/index.html (right hand side) to ./build/index.html (left hand side).
    "index.html": "index.html",
    // Process all files in array, concatenating them to create app.js
    "app.js": [
      "javascripts/app.js"
    ],
    // Process all files in array, concatenating them to create app.css
    "app.css": [
      "stylesheets/app.css"
    ],
    // Copy whole directory to build destination.
    "images/": "images/"
  },
  // RPC details of how to connect to Ethereum client for each network
  // 
  // Options:
  // - `host` and `port` keys required
  // 
  rpc: {
    host: "localhost",
    port: 8545
  },
  // Networks optionally specified so that when contract abstractions detect that Ethereum client is 
  // connected to specific network it uses specific contract artifacts that were saved and 
  // recorded earlier during compiling and migrations that are associated with that network 
  // to simplify app deplyment.
  // 
  // Notes: 
  // - Networks identified through Ethereums `net_version` RPC call
  // - `networks` object has network name as key, and value is object defining parameters 
  //   of the network.
  //   - Must specify `network_id` with value (i.e. `default` for catch-all, `*`)
  //     - `default` network used during development where contract artifacts not matter long-term
  //     and `network_id` continuously chances if TestRPC is restarted
  networks: {
    // Optional config values:
    // - host - Hostname pointing to networ location of Ethereum client 
    //   (defaults to "localhost" for development)
    // - port - Port number where Ethereum client accepts requests (defaults to 8545)
    // - gas - Gas limit for deploys (default is 3141592)
    // - gasPrice - Gas price used for deploys (default is 100000000000) (100 Shannon)
    // - from - From address used during any transaction Truffle makes during migrations
    //   (defaults to first available account provided by Ethereum client)
    //
    // Ethereum public network
    "live": {
      network_id: 1,
    },
    // Official Ethereum test network with Random IP
    "morden": {
      network_id: 2,
      host: "178.25.19.88",
      port: 80             
    },
    // Custom private network using default rpc settings
    "staging": {
      network_id: 1337
    },
    "development": {
      host: "localhost",
      port: 8545,
      // `default` - Catch-all
      // `*` - Match any network id
      network_id: "*"
    }
  },
  // Config options for Mocha testing framework
  mocha: {
    useColors: true
  }
};
