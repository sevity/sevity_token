const SevityContract = artifacts.require("SevityToken"); 

module.exports = function(deployer) {
  const initialSupply = web3.utils.toWei('1000000000', 'ether'); // 10억 토큰
  deployer.deploy(SevityContract, initialSupply);
};
