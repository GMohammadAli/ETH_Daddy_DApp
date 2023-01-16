const { expect } = require("chai")
const { ethers } = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("ETHDaddy", () => {
  let ethDaddy
  // let deployer, owner1

  const NAME = "ETH Daddy";
  const SYMBOL = "ETHD";


  beforeEach(async () => {
    // [deployer, owner1]
    const signers = await ethers.getSigners();
    console.log(signers + signers.length)
    console.log(signers[19].address)

    const ETHDaddy = await ethers.getContractFactory("ETHDaddy");
    ethDaddy = await ETHDaddy.deploy("ETHDaddy", "ETHD");
  })

  describe("Deployment", () => {
    
    it("has a name", async () => {
      const result = await ethDaddy.name();
      expect(result).to.equal("ETH Daddy");
    });

    it("has a symbol", async () => {
      const result = await ethDaddy.symbol();
      expect(result).to.equal("ETHD");
    });

    it('Sets the owner', async () => {
      const result = await ethDaddy.owner()
      expect(result).to.equal(deploy.address)
    })
  });

})
