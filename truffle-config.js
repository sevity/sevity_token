require('dotenv').config();
const { MNEMONIC, PROJECT_ID } = process.env;

const HDWalletProvider = require('@truffle/hdwallet-provider');


module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
     gas: 4200000,
     gasPrice: 40000000000, // 10GWEI
    },

    goerli: {
      //provider: () => new HDWalletProvider(MNEMONIC, `https://goerli.infura.io/v3/${PROJECT_ID}`),
      provider: () => new HDWalletProvider(MNEMONIC, `wss://goerli.infura.io/ws/v3/${PROJECT_ID}`),
      network_id: 5,       // Goerli's id
      confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets )
      gas: 30000000,
      gasPrice: 50000000000,
      networkCheckTimeout: 100000,
    },
    sepolia: {
      //provider: () => new HDWalletProvider(MNEMONIC, `https://sepolia.infura.io/v3/${PROJECT_ID}`),
      provider: () => new HDWalletProvider(MNEMONIC, `wss://sepolia.infura.io/ws/v3/${PROJECT_ID}`),
      network_id: 11155111,
      gas: 4465030,
      networkCheckTimeout: 100000,
    },
    mainnet: {
      //provider: () => new HDWalletProvider(MNEMONIC, `https://mainnet.infura.io/v3/${PROJECT_ID}`),
      provider: () => new HDWalletProvider(MNEMONIC, `wss://mainnet.infura.io/ws/v3/${PROJECT_ID}`),
      network_id: 1,
      confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets )
      gas: 2200000,
      gasPrice: 35000000000, // 10GWEI
      networkCheckTimeout: 100000,
    },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.19",      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },

};
