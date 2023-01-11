import styled from 'styled-components';

export const StatisticsList = styled.ul`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  margin-top: ${p => p.theme.space[4]}px;
  list-style: none;
  padding: ${p => p.theme.space[0]}px;
`;
export const StatisticsItem = styled.li`
  color: ${p => p.theme.colors.secondary};
  :nth-last-child(-n + 2) {
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;
