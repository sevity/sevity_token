require('dotenv').config();
const { MNEMONIC} = process.env;

const bip39 = require('bip39');
const hdkey = require('ethereumjs-wallet/hdkey');
const crypto = require('crypto');

const hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeedSync(MNEMONIC));
const wallet_hdpath = "m/44'/60'/0'/0/";

const wallet = hdwallet.derivePath(wallet_hdpath + "0").getWallet();
const privateKey = wallet.getPrivateKey().toString('hex');

console.log("Private Key: " + privateKey);
