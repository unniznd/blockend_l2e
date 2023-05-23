require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.13",
  networks: {
    mumbai: {
      url: process.env.TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY,
    constructorArguments: [
      "0xCC737a94FecaeC165AbCf12dED095BB13F037685",
      "0xF90cB82a76492614D07B82a7658917f3aC811Ac1"
    ],
  }
};
