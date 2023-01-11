import PropTypes from 'prop-types';

import { StatisticsList, StatisticsItem } from './Statistics.styled';
export const Statistics = props => {
  const dict = {
    good: 'Good',
    neutral: 'Neutral',
    bad: 'Bad',
    total: 'Total',
    positivePercentage: 'Positive feedback',
  };
  return (
    <>
      <StatisticsList>
        {Object.keys(props).map(prop => (
          <StatisticsItem key={prop}>
            {dict[prop]}: {props[prop]}
          </StatisticsItem>
        ))}
      </StatisticsList>
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
