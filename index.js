const Web3 = require("web3")
class erc721 {
  constructor(network, api, address) {
    this.mainnet = network
    //this.erc721 = api
    this.web3 = new Web3(new Web3.providers.HttpProvider(this.mainnet));
    this.Contract = new this.web3.eth.Contract(api, address);
  }
  contractCall(func, args) {
    if (Array.isArray(args)) {
      let funcStr = "this.Contract.methods[func](" + JSON.stringify(args).replace("[", "").replace("]", "") + ")"
      return eval(funcStr)
    }
    // in case someone decides to pass a single arg
    else {
      return this.Contract.methods[func](args)
    }
  }
  async getTokens(addr) {
    var tokens = []
    // get number of tokens addr has 
    var numTokens = await this.contractCall("balanceOf", addr).call()
    // increment through tokens
    for (let i = 0; i < numTokens; i++) {
      // returns a token id
      let currentToken = await this.contractCall("tokenOfOwnerByIndex", [addr, i]).call()
      // gets token uri given token id
      let tokenURI = await this.contractCall("tokenURI", currentToken).call()
      
      tokens.push({
        tokenId: currentToken,
        tokenURI: tokenURI
      })

    }
    return tokens
  }
}

module.exports.erc721 = erc721
