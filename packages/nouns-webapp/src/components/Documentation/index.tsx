import Section from '../../layout/Section';
import { Col } from 'react-bootstrap';
import classes from './Documentation.module.css';
import Accordion from 'react-bootstrap/Accordion';
import Link from '../Link';
import { Trans } from '@lingui/macro';
import Leaderboard from '../../components/Leaderboard';
import Winners from '../../components/Winners';
import Image from 'react-bootstrap/Image';
import bannerImage from '../../assets/play-nouns-bowling.jpg';
import { useHistory } from 'react-router';

const Documentation = () => {
  const history = useHistory();
  const nounsLink = (
    <Link text={<Trans>Nouns</Trans>} url="https://www.nouns.wtf" leavesPage={true} />
  );
  const playgroundLink = (
    <Link text={<Trans>Playground</Trans>} url="/playground" leavesPage={false} />
  );
  const publicDomainLink = (
    <Link
      text={<Trans>public domain</Trans>}
      url="https://creativecommons.org/publicdomain/zero/1.0/"
      leavesPage={true}
    />
  );
  const compoundGovLink = (
    <Link
      text={<Trans>Compound Governance</Trans>}
      url="https://compound.finance/governance"
      leavesPage={true}
    />
  );
  return (
    <Section fullWidth={false}>
      <Col lg={{ span: 10, offset: 1 }}>
        <div className={classes.headerWrapper}>
          <h1>
            <Trans>WTF?</Trans>
          </h1>
          <p className={classes.aboutText}>
            <Trans>
                <p>
                Bowler Nouns is an experimental attempt to build a decentralized bowling game with a DAO.
                </p>
                <p>
                While projects such as Nouns have attempted to bootstrap identity, community, governance, and a treasury…
                </p>
                <p>
                Bowler Nouns seeks to bootstrap a bunch of bowling games, bolstered by a treasury system designed to fund gaming operations, forever.
                </p>
            </Trans>
          </p>
          <p className={classes.aboutText} style={{ paddingBottom: '1rem' }}>
            <Trans>
              Learn more below, or start creating Bowler Nouns off-chain using the {playgroundLink}.
            </Trans>
          </p>
        </div>
        <div style={{ marginBottom: '3rem' }}>
          <Leaderboard tops={10} />
          <Winners tops={10} />
        </div>
        <Accordion flush>
          <Accordion.Item eventKey="0" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Summary</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <Trans>Bowler Nouns artwork is in the {publicDomainLink}</Trans>
                </li>
                <li>
                  <Trans>One Bowler Noun is trustlessly auctioned every 12 hours, forever</Trans>
                </li>
                <li>
                  <Trans>
                    50% of Bowler Noun auction proceeds are trustlessly sent to the treasury
                  </Trans>
                </li>
                <li>
                  <Trans>
                    50% of Bowler Noun auction proceeds are sent to the dev treasury multisig
                  </Trans>
                </li>
                <li>
                  <Trans>Settlement of one auction kicks off the next</Trans>
                </li>
                <li>
                  <Trans>All Bowler Nouns are members of Bowler DAO</Trans>
                </li>
                <li>
                  <Trans>Bowler DAO uses a fork of {compoundGovLink}</Trans>
                </li>
                <li>
                  <Trans>One Bowler Noun is equal to one vote</Trans>
                </li>
                <li>
                  <Trans>
                    The treasury is controlled exclusively by Bowler Nouns via governance
                  </Trans>
                </li>
                <li>
                  <Trans>Artwork is generative and stored directly on-chain (not IPFS)</Trans>
                </li>
                <li>
                <Trans>
                    Bowlders receive rewards in the form of Bowler Nouns (10% of supply for first 15 years)
                 </Trans>
                </li>
                <li>
                  <Trans>
                    Prizekeepers receive prizes in the form of Bowler Nouns (10% of supply for first 15 years)
                  </Trans>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Daily Auctions</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p className={classes.aboutText}>
                <Trans>
                  The Bowler Nouns Auction Contract will act as a self-sufficient NFT generation and
                  distribution mechanism, auctioning one Bowler Noun every 12 hours, forever. 50% of
                  auction proceeds (ETH) are automatically deposited in the Bowler DAO treasury,
                  where they are governed by Bowler Noun owners. 50% of auction proceeds (ETH) are
                  sent to the dev treasury multisig to fund gaming operations.
                </Trans>
              </p>

              <p className={classes.aboutText}>
                <Trans>
                  Each time an auction is settled, the settlement transaction will also cause a new
                  Bowler Noun to be minted and a new 12 hour auction to begin.{' '}
                </Trans>
              </p>
              <p>
                <Trans>
                  While settlement is most heavily incentivized for the winning bidder, it can be
                  triggered by anyone, allowing the system to trustlessly auction Bowler Nouns as
                  long as Ethereum is operational and there are interested bidders.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Bowler DAO </Trans>
            </Accordion.Header>
            <Accordion.Body>
              <Trans>
                Bowler DAO utilizes a fork of {compoundGovLink} and is the main governing body of
                the Bowler Nouns ecosystem. The Bowler DAO treasury receives 50% of ETH proceeds
                from daily Bowler Noun auctions. Each Bowler Noun is an irrevocable member of Bowler
                DAO and entitled to one vote in all governance matters. Votes are non-transferable
                (if you sell your Bowler Noun the vote goes with it) but delegatable, which means
                you can assign your vote to someone else as long as you own your Bowler Noun.
              </Trans>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Governance ‘Veto Power’</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  The Bowler Nouns Foundation considers the veto an emergency power that may be
                  exercised from time to time in the course of business. The Bowler Nouns Foundation will
                  veto proposals that introduce non-trivial legal or existential risks to the Bowler
                  DAO or the Bowler Nouns Foundation, including (but not necessarily limited to)
                  proposals that:
                </Trans>
              </p>
              <ul>
                <li>unequally withdraw the treasury for personal gain</li>
                <li>bribe voters to facilitate withdraws of the treasury for personal gain</li>
                <li>alter auction cadence for the purpose of maintaining or acquiring a voting majority</li>
                <li>make upgrades to critical smart contracts without undergoing an audit</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Bowler Noun Traits</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  Bowler Nouns are made up of:
                </Trans>
              </p>
              <ul>
                <li>
                  <Trans>Backgrounds (2) </Trans>
                </li>
                <li>
                  <Trans>Bodies (32)</Trans>
                </li>
                <li>
                  <Trans>Balls (8) </Trans>
                </li>
                <li>
                  <Trans>Heads (42) </Trans>
                </li>
                <li>
                  <Trans>Glasses (12)</Trans>
                </li>
              </ul>
              <Trans>
                You can experiment with off-chain Bowler Noun generation at the {playgroundLink}.
              </Trans>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>On-Chain Artwork</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  Bowler Nouns are stored directly on Ethereum and do not utilize pointers to other
                  networks such as IPFS. This is possible because Bowler Noun parts are compressed
                  and stored on-chain using a custom run-length encoding (RLE), which is a form of
                  lossless compression.
                </Trans>
              </p>
              <p>
                <Trans>
                  The compressed parts are efficiently converted into a single base64 encoded SVG
                  image on-chain. To accomplish this, each part is decoded into an intermediate
                  format before being converted into a series of SVG rects using batched, on-chain
                  string concatenation. Once the entire SVG has been generated, it is base64
                  encoded.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Noun Seeder Contract</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  The Bowler Noun Seeder contract is used to determine Bowler Noun traits during the
                  minting process. The seeder contract can be replaced to allow for future trait
                  generation algorithm upgrades. Additionally, it can be locked by the Bowler DAO to
                  prevent any future updates.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Bowlder's Reward</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  'Bowlders' are the group of five builders that initiated Bowler Nouns. Here are
                  the Bowlders:
                </Trans>
              </p>
              <ul>
                <li>
                  <Link
                    text="@bowlingseed"
                    url="https://twitter.com/bowlingseed"
                    leavesPage={true}
                  />
                </li>
                <li>
                  <Link text="@gio4nft" url="https://twitter.com/gio4nft" leavesPage={true} />
                </li>
                <li>
                  <Link
                    text="@TheGrandEnnui"
                    url="https://twitter.com/thegrandennui"
                    leavesPage={true}
                  />
                </li>
                <li>
                  <Link text="@YungTCarti" url="https://twitter.com/YungTCarti" leavesPage={true} />
                </li>
                <li>
                  <Link text="@yanzero_" url="https://twitter.com/@yanzero_" leavesPage={true} />
                </li>
                <li>
                  <Link text="@kerimbonia" url="https://twitter.com/@kerimbonia" leavesPage={true} />
                </li>
              </ul>
              <p>
                <Trans>
                  Because 50% of Bowler Noun auction proceeds are sent to the DAO treasury, Bowlders
                  have chosen to compensate themselves with Bowler Nouns. Every 10th Bowler Noun for
                  the first 15 years of the project (Bowler Noun ids #0, #10, #20, #30 and so on)
                  will be automatically sent to the Bowlder's multisig to be vested and shared among
                  the founding members of the project.
                </Trans>
              </p>
              <p>
                <Trans>
                  To encourage proliferation of Bowler Nouns, Prizekeepers have chosen to reserve some
                  Bowler Nouns for prizes. Every 10th Bowler Noun for the first 15 years of the project
                  (Bowler Noun ids #1, #11, #21, #31 and so on) will be automatically
                  sent to the Prizekeeper's multisig to be given out as prizes to outstanding performers.
                </Trans>
              </p>
              <p>
                <Trans>
                    Bowlder and Prizekeepers distributions don't interfere with the cadence of 12 hour
                    auctions. Bowler Nouns are sent directly to the Bowlder's and Prizekeeper's
                    multisigs, and auctions continue on schedule with the next Bowler Noun ID.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div style={{ textAlign: 'center', cursor: 'pointer' }}>
          <Image
            src={bannerImage}
            alt={'Banner Image'}
            fluid
            onClick={() => history.push(`/play`)}
          />
        </div>
      </Col>
    </Section>
  );
};
export default Documentation;
