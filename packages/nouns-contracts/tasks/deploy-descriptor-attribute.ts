import { task, types } from 'hardhat/config';

task('deploy-descriptor-attribute', 'Deploy descriptor attribute.')
  .addOptionalParam(
    'nounsArt',
    'The `NounsArt` contract address',
    '0x13835485021B44a1970Ff8Fa8F0dddA918fa5343',
    types.string,
  )
  .addOptionalParam(
    'svgRenderer',
    'The `SVGRenderer` contract address',
    '0x94b1cCE34affd44c8099Eb40373f0bc6660335CE',
    types.string,
  )
  .setAction(async ({ nounsArt, svgRenderer }, { ethers }) => {
    const attributeFactory = await ethers.getContractFactory('NounsAuctionHouse');
    const attributeContract = await attributeFactory.deploy();
    await attributeContract.deployed();

    console.log(`Attribute contract: ${attributeContract.address}`);
  });
