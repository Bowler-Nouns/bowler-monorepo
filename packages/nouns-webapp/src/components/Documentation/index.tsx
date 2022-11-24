import Section from '../../layout/Section';
import { Col } from 'react-bootstrap';
import classes from './Documentation.module.css';
import Accordion from 'react-bootstrap/Accordion';
import Link from '../Link';
import { Trans } from '@lingui/macro';
import Leaderboard from '../../components/Leaderboard';

const Documentation = () => {
  const nounsLink = (
    <Link
      text={<Trans>Nouns</Trans>}
      url="https://www.nouns.wtf"
      leavesPage={true}
    />
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
              Bowler Nouns are an experimental attempt to improve the development of web3 bowling
              games. While projects such as {nounsLink} have attempted to bootstrap identity, community,
              governance, and a treasury that can be used by the community, Bowler Nouns seeks to
              bootstrap a game project, a gaming community, and a treasury that can be used by the community.
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
                  <Trans>50% of Bowler Noun auction proceeds are trustlessly sent to the treasury</Trans>
                </li>
                <li>
                  <Trans>50% of Bowler Noun auction proceeds are sent to the game studio multi-sig</Trans>
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
                  <Trans>The treasury is controlled exclusively by Bowler Nouns via governance</Trans>
                </li>
                <li>
                  <Trans>Artwork is generative and stored directly on-chain (not IPFS)</Trans>
                </li>
                <li>
                  <Trans>
                    Founders receive rewards in the form of Bowler Nouns (10% of supply for first 15 years)
                  </Trans>
                </li>
                <li>
                  <Trans>
                    One in fourteen Bowler Nouns is reserved for prize contests (7% of supply for first 15 years)
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
                  sent to the game studio multi-sig to fund game development operations.
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
                  triggered by anyone, allowing the system to trustlessly auction Bowler Nouns as long as
                  Ethereum is operational and there are interested bidders.
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
                Bowler DAO utilizes a fork of {compoundGovLink} and is the main governing body of the
                Bowler Nouns ecosystem. The Bowler DAO treasury receives 50% of ETH proceeds from daily
                Bowler Noun auctions. Each Bowler Noun is an irrevocable member of Bowler DAO and entitled to one
                vote in all governance matters. Bowler Noun votes are non-transferable (if you sell your
                Bowler Noun the vote goes with it) but delegatable, which means you can assign your vote to
                someone else as long as you own your Bowler Noun.
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
                  The Bowler Nouns Foundation considers the veto an emergency power that should not be
                  exercised in the normal course of business. The Bowler Nouns Foundation will veto
                  proposals that introduce non-trivial legal or existential risks to the Bowler DAO 
                  or the Bowler Nouns Foundation, including (but not necessarily limited to) proposals
                  that:
                </Trans>
              </p>
              <ul>
                <li>unequally withdraw the treasury for personal gain</li>
                <li>bribe voters to facilitate withdraws of the treasury for personal gain</li>
                <li>
                  attempt to alter Bowler Noun auction cadence for the purpose of maintaining or acquiring
                  a voting majority
                </li>
                <li>make upgrades to critical smart contracts without undergoing an audit</li>
                <li>propose game features which the game dev team is incapable of fulfilling</li>
              </ul>
              <p>
                <Trans>
                  There are unfortunately no algorithmic solutions for making these determinations
                  in advance (if there were, the veto would not be required), and proposals must be
                  considered on a case by case basis.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Bowler Noun Traits</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  Bowler Nouns are generated randomly based Ethereum block hashes. There are no 'if'
                  statements or other rules governing Bowler Noun trait scarcity, which makes all Bowler Nouns
                  equally rare. As of this writing, Bowler Nouns are made up of:
                </Trans>
              </p>
              <ul>
                <li>
                  <Trans>backgrounds (2) </Trans>
                </li>
                <li>
                  <Trans>bodies (32)</Trans>
                </li>
                <li>
                  <Trans>balls (8) </Trans>
                </li>
                <li>
                  <Trans>heads (42) </Trans>
                </li>
                <li>
                  <Trans>glasses (12)</Trans>
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
                  networks such as IPFS. This is possible because Bowler Noun parts are compressed and
                  stored on-chain using a custom run-length encoding (RLE), which is a form of
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
                  The Noun Seeder contract is used to determine Bowler Noun traits during the minting
                  process. The seeder contract can be replaced to allow for future trait generation
                  algorithm upgrades. Additionally, it can be locked by the Bowler DAO to prevent any
                  future updates.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <Trans>Founder's Reward</Trans>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <Trans>
                  'Founders' are the group of five builders that initiated Bowler Nouns. Here are the
                  Founders:
                </Trans>
              </p>
              <ul>
                <li>
                  <Link text="@bowlingseed" url="https://twitter.com/bowlingseed" leavesPage={true} />
                </li>
                <li>
                  <Link text="@gio4nft" url="https://twitter.com/gio4nft" leavesPage={true} />
                </li>
                <li>
                  <Link text="@TheGrandEnnui" url="https://twitter.com/thegrandennui" leavesPage={true} />
                </li>
                <li>
                  <Link text="@YungTCarti" url="https://twitter.com/YungTCarti" leavesPage={true} />
                </li>
                <li>
                  <Link text="@yanzero_" url="https://twitter.com/@yanzero_" leavesPage={true} />
                </li>
              </ul>
              <p>
                <Trans>
                Because 50% of Bowler Noun auction proceeds are sent to the DAO treasury, Founders have chosen to compensate themselves with Bowler Nouns.
                Every 10th Bowler Noun for the first 15 years of the project (Bowler Noun ids #0, #10, #20, #30 and so on) will be
                automatically sent to the Founder's multisig to be vested and shared among the founding members of the project.
                </Trans>
            </p>
            <p>
                <Trans>
                To encourage proliferation of Bowler Nouns, Founders have chosen to reserve one Bowler Noun per week for prizes.
                Every 14th Bowler Noun for the first 15 years of the project (Bowler Noun ids #1, #15, #29, #43 and so on) will be
                automatically sent to the Prizekeeper's multisig to be granted as prizes to outstanding community members.
                </Trans>
            </p>
              <p>
                <Trans>
                  Founder and Prize distributions don't interfere with the cadence of 12 hour auctions. Bowler Nouns
                  are sent directly to the Founder's and Prizekeeper's multisigs, and auctions continue on schedule
                  with the next available Bowler Noun ID.
                </Trans>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Section>
  );
};
export default Documentation;
