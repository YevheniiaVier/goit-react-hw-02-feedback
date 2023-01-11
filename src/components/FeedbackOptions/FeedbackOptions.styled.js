import styled from 'styled-components';

export const Options = styled.div`
  display: flex;
  column-gap: ${p => p.theme.space[3]}px;
`;

export const OptionBtn = styled.button`
  display: block;
  min-width: 100px;
  height: 30px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};

  background-color: ${p => p.theme.colors.mute};
  outline: ${p => `2px solid ${p.theme.borders.none}`};
  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.heading};
  color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding: ${p => p.theme.space[2]}px;
  transition: background-color 300ms 100ms;
  :hover {
    color: ${p => p.theme.colors.accent};
  }
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
