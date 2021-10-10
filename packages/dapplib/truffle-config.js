require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift reflect saddle arrow inner civil army gauge'; 
let testAccounts = [
"0xaf4d5817f1b3250d215e1993cd45c7a01c25c2946cb8c51565b644cad2a2e613",
"0xcdf8bed2e7738fc4141f269bad3c91db5b3f09176dff91990135af597b79e5f3",
"0xcb5eb987361583867c444379b1ae1b138257a1a5fe1ed2d3763f032fce5d1c21",
"0xabceea87ec18a994febfe1f19ebbdaf8f71b252e3c423493dc155e72bca28e52",
"0xd30f7e3ce3d4edbc9ed8bb79d1d685c3934ad63a9b4bf35444fba11abc9a4c52",
"0x516608b0faee33f54302b175492125b827895474cdb9a08af1fcf467175d30ed",
"0x25a32699645681d6adba8160b51fc8b86950167eef22d6b9224137bff1ae6e9f",
"0xd60aa39b83c92f7d25952d21ac02279d052129cb2df6d499dbdc8a479da3abd7",
"0xfa172115d032ec88208ca31a650c87787a3815358f5c919980a00b84eea26490",
"0xb42a5e5cbf9309af4dd71ea81663662a4a3e97530ee21d52c3c86042b17a9151"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

