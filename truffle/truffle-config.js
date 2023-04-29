/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation, and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * https://trufflesuite.com/docs/truffle/reference/configuration
 *
 * Hands-off deployment with Infura
 * --------------------------------
 *
 * Do you have a complex application that requires lots of transactions to deploy?
 * Use this approach to make deployment a breeze 🏖️:
 *
 * Infura deployment needs a wallet provider (like @truffle/hdwallet-provider)
 * to sign transactions before they're sent to a remote public node.
 * Infura accounts are available for free at 🔍: https://infura.io/register
 *
 * You'll need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. You can store your secrets 🤐 in a .env file.
 * In your project root, run `$ npm install dotenv`.
 * Create .env (which should be .gitignored) and declare your MNEMONIC
 * and Infura PROJECT_ID variables inside.
 * For example, your .env file will have the following structure:
 *
 * MNEMONIC = <Your 12 phrase mnemonic>
 * PROJECT_ID = <Your Infura project id>
 *
 * Deployment with Truffle Dashboard (Recommended for best security practice)
 * --------------------------------------------------------------------------
 *
 * Are you concerned about security and minimizing rekt status 🤔?
 * Use this method for best security:
 *
 * Truffle Dashboard lets you review transactions in detail, and leverages
 * MetaMask for signing, so there's no need to copy-paste your mnemonic.
 * More details can be found at 🔎:
 *
 * https://trufflesuite.com/docs/truffle/getting-started/using-the-truffle-dashboard/
 */

// require('dotenv').config();
// const { MNEMONIC, PROJECT_ID } = process.env;

// const HDWalletProvider = require('@truffle/hdwallet-provider');
const path = require("path");
require('dotenv').config();
const key = process.env.MNEMONIC;
const HDWalletProvider = require("@truffle/hdwallet-provider");
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "../client/src/contracts"),
  networks: {
    develop: {
      port: 8545,
      network_id: "1337"
    },
    ropsten: {
      networkCheckTimeout: 10000,
      provider: () => new HDWalletProvider(`${key}`,`https://ropsten.infura.io/v3/1d5fb752e905416ea938459ac8872368`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
   
    matic:{
      networkCheckTimeout: 10000,
      provider: () => new HDWalletProvider(`${key}`,`wss://polygon-mumbai.g.alchemy.com/v2/BNLEUK85VPivtGDAWmqdZWFILkGQbv5h`),
      network_id:  80001,     
      //gas: 20000000,
      gasPrice:100000000000,        
      confirmations: 1,    
      timeoutBlocks: 200, 
      skipDryRun: true     

    }
  },
  compilers: {
    solc: {
    version: "^0.8.1"
    }
},
plugins: [
  'truffle-plugin-verify'
],
api_keys: {
  etherscan:'VE8G8TQAA495N1M7R32RP5RT46KVCMSMRA',
  polygonscan: 'YARQS2K6QJMV21FTY3Q8MSS6T7DSP8ACHH'
}
};
