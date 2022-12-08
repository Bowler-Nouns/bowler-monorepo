import { task, types } from 'hardhat/config';

task('deploy-descriptor-attribute', 'Deploy descriptor attribute.')
  .addOptionalParam(
    'nounsArt',
    'The `NounsArt` contract address',
    '0xD9680B88AA13eFD385f4BF2ac0b1030614a2C375',
    types.string,
  )
  .addOptionalParam(
    'svgRenderer',
    'The `SVGRenderer` contract address',
    '0x4b7A026f316647dd9705c3F6cc21D3A7049397e4',
    types.string,
  )
  .setAction(async ({ nounsArt, svgRenderer }, { ethers }) => {
    const attributeFactory = await ethers.getContractFactory('NounsAttribute');
    const attributeContract = await attributeFactory.deploy();
    await attributeContract.deployed();

    const nftDescriptorFactory = await ethers.getContractFactory('NFTDescriptorV2');
    const nftDescriptorContract = await nftDescriptorFactory.deploy();
    await nftDescriptorContract.deployed();

    const descriptorFactory = await ethers.getContractFactory('NounsDescriptorV2', {
      libraries: { NFTDescriptorV2: nftDescriptorContract.address },
    });
    const descriptorContract = await descriptorFactory.deploy(
      nounsArt,
      svgRenderer,
      attributeContract.address,
    );
    await descriptorContract.deployed();

    console.log(`Attribute contract: ${attributeContract.address}`);
    console.log(`NFTDescriptorV2 contract: ${nftDescriptorContract.address}`);
    console.log(`NounsDescriptorV2 contract: ${descriptorContract.address}`);
  });
