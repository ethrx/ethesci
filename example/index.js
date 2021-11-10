const erc721= require("ethesci").erc721
const abi = require("./example.json")
const contract = new erc721("https://rpc-mainnet.maticvigil.com/", abi, "0xa8e8dbcab4ea3ef82db09803132ceb43da743579")
const me = "0x60d1dc8E003ed90524105D201a8a947c3E12f726"

async function main(){
  
  // Custom contract function call
  const args = ["3264"]
  const func = "ownerOf"
  
  let ownerOf = await contract.contractCall(func, args).call()
  console.log(ownerOf) // 0x60d1dc8E003ed90524105D201a8a947c3E12f726

  // A custom function implementation to get all tokens owner has on a contract
  let tokens = await contract.getTokens(me) 
  console.log(tokens)
  /*
  [
    {
      tokenId: '3264',
      tokenURI: 'ipfs://Qmf5KPfTQnHShtdc1UudghV2AfwNnYNE8P4KgAmWFMvSK5/3264.json'
    },
    {
      tokenId: '9881',
      tokenURI: 'ipfs://Qmf5KPfTQnHShtdc1UudghV2AfwNnYNE8P4KgAmWFMvSK5/9881.json'
    }
  ]
  */
}

main()
