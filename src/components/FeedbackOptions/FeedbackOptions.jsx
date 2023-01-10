import { Options, OptionBtn } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Options>
      {options.map(option => (
        <OptionBtn
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </OptionBtn>
      ))}
    </Options>
  );
};

// Section.propTypes = {
//   title: PropTypes.string,
// };
