import { useReverseENSLookUp } from '../../utils/ensLookup';
import { resolveNounContractAddress } from '../../utils/resolveNounsContractAddress';
import { useEthers } from '@usedapp/core';
import classes from './ShortAddress.module.css';
import { containsBlockedText } from '../../utils/moderation/containsBlockedText';
import { useShortAddress } from '../../utils/addressAndENSDisplayUtils';
import React from 'react';
import Identicon from '../Identicon';

const ShortAddress: React.FC<{
  address: string;
  avatar?: boolean;
  size?: number;
  link?: string;
}> = props => {
  const { address, avatar, size = 24, link } = props;
  const { library: provider } = useEthers();

  const ens = useReverseENSLookUp(address) || resolveNounContractAddress(address);
  const ensMatchesBlocklistRegex = containsBlockedText(ens || '', 'en');
  const shortAddress = useShortAddress(address);

  if (avatar) {
    return (
      <div className={classes.shortAddress}>
        {avatar && (
          <div key={address}>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <Identicon size={size} address={address} provider={provider} />
            </a>
          </div>
        )}
        <span>{ens && !ensMatchesBlocklistRegex ? ens : shortAddress}</span>
      </div>
    );
  }

  return <>{ens && !ensMatchesBlocklistRegex ? ens : shortAddress}</>;
};

export default ShortAddress;
