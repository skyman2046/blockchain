import client from 'kapitalize';

const RPC_USERNAME='admin';
const RPC_PASSWORD='123';
const RPC_HOST='127.0.0.1';
const RPC_PORT = 19001;

TEST_ADDRESS='mkiytxYA6kxUC8iTnzLPgMfCphnz91zRfZ';
TEST_PRIVATE_KEY='cTAfueRoL1HUXasWdnETANA7uRq33BUp3sw88vKZpo9Hs8xWP82';
TEST_WALLET_NAME='TestWallet1';
MIN_DUST_AMOUNT=10000;
MIN_TRANSACTION_FEE=10000;
console.log('Hello, Bitcoin-Testnet RPC sample.');
console.log(' PPk Public Group @ 2018');

//initial rpc service object
const client = client()