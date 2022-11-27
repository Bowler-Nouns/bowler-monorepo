import classes from './Winners.module.css';
import Section from '../../layout/Section';
import { useQuery } from '@apollo/client';
import { winners } from '../../wrappers/subgraph';
import { ethers } from 'ethers';
import { useCoingeckoPrice } from '@usedapp/coingecko';
import ShortAddress from '../ShortAddress';
import { buildEtherscanAddressLink } from '../../utils/etherscan';
import { Table } from 'react-bootstrap';

interface WinnersPageProps {
  tops?: number;
}

const Winners: React.FC<WinnersPageProps> = props => {
  const { tops } = props;
  const isMobile = window.innerWidth < 992;
  const { loading, error, data } = useQuery(winners(tops || 10));

  const etherPrice = Number(useCoingeckoPrice('ethereum', 'usd'));

  if (loading) {
    return (
      <div>
        <b>loading...</b>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <b>error...</b>
      </div>
    );
  }

  return (
    <Section fullWidth={false} className={classes.wrapper}>
      <div style={{ textAlign: 'center' }}>
        <h1>BOWLER NOUNS DAO</h1>
        <h2>Auction High Scores</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Table borderless style={{ alignSelf: 'center', width: 800 }}>
          <tr>
            <th>#</th>
            <th>Rank</th>
            <th style={{ textAlign: 'center' }}>#Won</th>
            <th style={{ textAlign: 'center' }}>%Score</th>
            <th style={{ textAlign: 'center' }}>Total ETH</th>
            <th style={{ textAlign: 'center' }}>Total $</th>
          </tr>

          {data.accounts.map((item: any, index: number) => (
            <tr>
              <td>{index + 1}</td>
              <td>
                <ShortAddress
                  address={item.id}
                  avatar={isMobile ? false : true}
                  link={buildEtherscanAddressLink(item.id)}
                />
              </td>
              <td style={{ textAlign: 'center' }}>{item.winningBidCount}</td>
              <td style={{ textAlign: 'center' }}>
                {((item.totalWinningBid / data.governances[0]?.totalBid) * 100).toFixed(2)} %
              </td>
              <td style={{ textAlign: 'center' }}>
                {ethers.utils.formatEther(item.totalWinningBid).substring(0, 5)}
              </td>
              <td style={{ textAlign: 'center' }}>
                {(Number(ethers.utils.formatEther(item.totalWinningBid)) * etherPrice).toFixed(2)}
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </Section>
  );
};
export default Winners;
