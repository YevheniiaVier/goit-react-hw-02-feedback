import { Options, OptionBtn } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options }) => {
  return (
    <Options>
      {options.map(option => (
        <OptionBtn key={option} type="button">
          {option}
        </OptionBtn>
      ))}
    </Options>
  );
};
