import { task, types } from 'hardhat/config';
import ImageData from '../files/image-data-v2.json';
import { parseTraitName } from './utils';

task('populate-attribute', 'Populates the attribute.')
  .addOptionalParam(
    'nounsAttribute',
    'The `NounsAttribute` contract address',
    '0xD9837Eb4D2A184AE4B3D4D57258AE1cD5D7dD448',
    types.string,
  )
  .setAction(async ({ nounsAttribute }, { ethers, network }) => {
    const options = { gasLimit: network.name === 'hardhat' ? 30000000 : undefined };

    const attributeFactory = await ethers.getContractFactory('NounsAttribute');
    const attributeContract = attributeFactory.attach(nounsAttribute);

    const { images } = ImageData;
    const { bodies, accessories, heads, glasses } = images;

    const bodyAttributes = bodies.map(({ filename }) => parseTraitName(filename));
    const accessoryAttributes = accessories.map(({ filename }) => parseTraitName(filename));
    const headAttributes = heads.map(({ filename }) => parseTraitName(filename));
    const glassesAttributes = glasses.map(({ filename }) => parseTraitName(filename));

    await attributeContract.addManyBackgrounds(['Cool', 'Warm']);

    await attributeContract.addManyBodies(bodyAttributes, options);
    await attributeContract.addManyAccessories(accessoryAttributes, options);
    await attributeContract.addManyHeads(headAttributes, options);
    await attributeContract.addManyGlasses(glassesAttributes, options);

    console.log('Attribute populated.');
  });
