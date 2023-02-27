const {ethers} = require("hardhat");
require("dotenv").config({path: ".env"});
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

const main = async () => {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  const metadataURL = METADATA_URL;
  
  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");
  const deployedContract = await cryptoDevsContract.deploy(metadataURL, whitelistContract);
  await deployedContract.deployed();

  console.log("CryptoDevs contract has been deployed to: ", deployedContract.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();