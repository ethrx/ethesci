# Ethereum Easy Smart Contract Interface
Interact with smart contracts easily in JavaScript using [web3.js](https://github.com/ChainSafe/web3.js).
## Getting Started
```bash
npm install ethesci
```
## Usage
### ERC721
```js
const ERC721 = require("ethesci").erc721

// initialize the contract
var contract = new ERC721(network_url, abi_json, contract_address)

// create contract function call
var contractCall = contract.contractCall(function_name, arguments)
// call the contract function
let output = await contractCall.call()
console.log(output) 

// the ERC721 template includes custom functions such as getTokens(owner_address)
var tokens = contract.getTokens(owner_address)
console.log(tokens)
/*
[
  {
    "tokenId": "unint265",
    "tokenURI": "string"
  }
]
*/

```
### Other contract types (ERC20, ERC1155, etc)
```js
const Contract = require("ethesci").default

var contract = new Contract(network_url, abi_json, contract_address)

var contractCall = contract.contractCall(function_name, arguments)
let output = await contractCall.call()
console.log(output) 
```

