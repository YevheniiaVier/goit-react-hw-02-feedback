import PropTypes from 'prop-types';

import { StatisticsList, StatisticsItem } from './Statistics.styled';
export const Statistics = props => {
  return (
    <StatisticsList>
      {Object.keys(props).map(prop => (
        <StatisticsItem key={prop}>
          {prop} : {props[prop]}
        </StatisticsItem>
      ))}
    </StatisticsList>
  );
};
