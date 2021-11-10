# Ethereum Easy Smart Contract Interface
Interact with smart contracts easily in JavaScript using [web3.js](https://github.com/ChainSafe/web3.js).
## Getting Started
```bash
npm install ethesci
```
## Usage
```js
const erc721 = require("ethesci").erc721

var contract = new erc721(network_url, abi_json, contract_address)
var contractCall = contract.contractCall(function_name, arguments)

let output = await contractCall.call()
console.log(output) 
```


