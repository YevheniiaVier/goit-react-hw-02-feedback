import PropTypes from 'prop-types';

import { StatisticsList, StatisticsItem, StatLine } from './Statistics.styled';
export const Statistics = props => {
  return (
    <>
      <StatisticsList>
        {Object.keys(props).map(prop => (
          <StatisticsItem key={prop}>
            {prop}: {props[prop]}
          </StatisticsItem>
        ))}
      </StatisticsList>
      {/* <StatLine>Total</StatLine>
      <StatLine>Positive feedbacks</StatLine> */}
    </>
  );
};

Statistics.propTypes = {
  props: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }),
};
