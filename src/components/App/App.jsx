import { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Container } from './App.styled';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = optionLabel => {
    this.setState(prevState => ({
      [optionLabel]: prevState[optionLabel] + 1,
    }));
  };
  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value);
  countPositiveFeedbackPercentage = () => {
    return this.state.good
      ? (this.state.good / this.countTotalFeedback()) * 100
      : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    return (
      <Container>
        <Section title="Please leave your feedback here">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {totalFeedbacks ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positivePercentage={
                this.countPositiveFeedbackPercentage().toFixed() + '%'
              }
            ></Statistics>
          ) : (
            <Notification message="There is no feedback yet"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}
