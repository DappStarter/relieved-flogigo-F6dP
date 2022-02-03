require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'include clock bottom slab green rare remain snow hunt deputy flush tattoo'; 
let testAccounts = [
"0x0e969f6e4c9d652995abdca6a057f5be3bb982486262e8cce5c5d363f70708d8",
"0xec44e04c083942117c84f1eecd8672e419f304eb219243fb0b26a18a1b7a82b8",
"0x2848d548e9e7417d0604643e9008014806f22eb1baf4bf93e25337681e8c49e6",
"0xca46a5e02a4c6e22648227d0df73dd67bd5840c720fa45ea9c38d3e1e234a43d",
"0x24f862478597688170b6766ebaffd4c78da018c1995aabf21cf34d69e36c3ab7",
"0x3097b32b14857b6509062361cc816565c1b3ddbbef99d0522c343fb4555f2b04",
"0x3d8651dedb331eaddfffb1d3e773688a070729b27fd6d7be178c6c4173e4ab7d",
"0x0e59ec324e3e19c7a68a5c1cc3852e1b20fe89fe8bfbb36d2b3a6e45d52d867d",
"0xb8e46d57e005dde0310c2103b323009d16b7c5eb9d6f41249553b67c3c3ab13a",
"0x87e89f28629799f876a9898fca3ffba54d2ef171dcaec61e6684f57c488a2080"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


