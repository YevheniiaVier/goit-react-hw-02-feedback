import styled from 'styled-components';

export const StatisticsList = styled.ul`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  margin-top: ${p => p.theme.space[4]}px;
  list-style: none;
`;
export const StatisticsItem = styled.li`
  background-color: ${p => p.theme.colors.grey};
//   display: flex;
//   align-items: center;
//   gap: ${p => p.theme.space[4]}px;
//   padding: ${p => p.theme.space[3]}px;
//   box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
//   border-radius: ${p => p.theme.radii.big};
  transition: transform 300ms 100ms;
  :hover {
    transform: scale(1.03);
  }
  text-transform: capitalize;
  
`;

export const StatLine = styled.p`
  //   font-weight: ${p => p.theme.fontWeights.bold};
  //   font-size: ${p => p.theme.fontSizes.l};
  //   margin-top: ${p => p.theme.space[4]}px;
`;
