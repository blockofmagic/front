const Web3 = require("web3");
let web3;
const ethEnabled = () => {
  if (window.ethereum) {
    web3 = new Web3("http://localhost:8545");
    window.ethereum.enable();
    return true;
  }
  return false;
};

if (!ethEnabled()) {
  alert(
    "Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"
  );
}

export default web3;
