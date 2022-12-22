import classes from './Banner.module.css';
import Section from '../../layout/Section';
import { Col } from 'react-bootstrap';
import calendar_noun from '../../assets/calendar_noun.png';
import bowler_noun_7 from '../../assets/bowler-noun-7.png';
import bowler_noun_8 from '../../assets/bowler-noun-8.png';
import Noun from '../Noun';
import { Trans } from '@lingui/macro';

const Banner = () => {
  return (
    <Section fullWidth={false} className={classes.bannerSection}>
      <Col lg={6}>
        <div className={classes.wrapper}>
          <h1>
            <Trans>ONE BOWLER,</Trans>
            <br />
            <Trans>EVERY 12 HRS,</Trans>
            <br />
            <Trans>ALL DAY LONG</Trans>
          </h1>
        </div>
      </Col>
      <Col lg={6}>
        <div>
          <Noun imgPath={bowler_noun_7} alt="noun" />
        </div>
      </Col>
    </Section>
  );
};

export default Banner;
