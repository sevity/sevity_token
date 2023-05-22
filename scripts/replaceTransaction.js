require('dotenv').config();
const { MNEMONIC, PROJECT_ID, PRIVATE_KEY, ACCOUNT } = process.env;

const Web3 = require('web3');
const Tx = require('ethereumjs-tx').Transaction;

const web3 = new Web3(`https://mainnet.infura.io/v3/${PROJECT_ID}`);

const account1 = ACCOUNT; // Your account address
const privateKey1 = Buffer.from(PRIVATE_KEY, 'hex');

async function sendTransaction() {
  const nonce = await web3.eth.getTransactionCount(account1);

  const rawTransaction = {
    from: account1,
    nonce: web3.utils.toHex(nonce),
    gasPrice: web3.utils.toHex(40 * 1e9), // 40 Gwei
    gasLimit: web3.utils.toHex(21000),
    to: account1,
    value: '0x0',
  };

  const tx = new Tx(rawTransaction, { chain: 'mainnet' });
  tx.sign(privateKey1);

  const serializedTx = tx.serialize();
  web3.eth
    .sendSignedTransaction('0x' + serializedTx.toString('hex'))
    .on('receipt', console.log)
    .on('error', console.error);
}

sendTransaction();

