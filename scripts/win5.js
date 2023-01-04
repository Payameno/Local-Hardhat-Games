// add the game address here and update the contract name if necessary
const gameAddr = "0x610178dA211FEF7D417bC0e6FeD39F05609AD788";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

//(uint8 => values between 0 and 255)
//210 + 56 =< 45 to reach 255. Then begins again from 0 and continues to reach 10 (11)
const tx1 = await game.giveMeAllowance(12000);
await tx1.wait();

const tx2 = await game.mint(10000);
await tx2.wait();

const tx = await game.win();

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
