import classes from './Footer.module.css';
import { Container } from 'react-bootstrap';
import { buildEtherscanAddressLink } from '../../utils/etherscan';
import { externalURL, ExternalURL } from '../../utils/externalURL';
import config from '../../config';
import Link from '../Link';
import { Trans } from '@lingui/macro';

const Footer = () => {
  const discordURL = externalURL(ExternalURL.discord);
  const twitterURL = externalURL(ExternalURL.twitter);
  const openseaURL = externalURL(ExternalURL.opensea);
  //const etherscanURL = buildEtherscanAddressLink(config.addresses.nounsToken);

  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <footer className={classes.footerSignature}>
          <Link text={<Trans>Discord</Trans>} url={discordURL} leavesPage={true} />
          <Link text={<Trans>Twitter</Trans>} url={twitterURL} leavesPage={true} />
          <Link text={<Trans>OpenSea</Trans>} url={openseaURL} leavesPage={true} />
        </footer>
      </Container>
    </div>
  );
};
export default Footer;
