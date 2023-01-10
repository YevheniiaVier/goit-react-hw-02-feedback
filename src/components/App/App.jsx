import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
export const App = () => {
  return (
    <div>
      <Section title="Please leave your feedback here">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={'j'}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        <Statistics
          good={'1'}
          neutral={'2'}
          bad={'3'}
          total={'4'}
          positivePercentage={'5'}
        ></Statistics>
      </Section>
    </div>
  );
};
