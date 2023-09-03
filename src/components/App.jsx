import { GlobalStyle } from '../global-style';
import { Section } from './section/Section';
import { Component } from "react";
import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './feedback-options/Feedback-options';
import { Notification } from './notification/Notification';

export class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
};

clickXHandler = evt => {
    this.setState(prevState => {
        return {
            [evt]: prevState[evt] + 1,
        };
    });
};

countTotalFeedback = () => {
const { good, neutral, bad } = this.state;
const result = good + neutral + bad;
return result;
};

countPositiveFeedbackPercentage = () => {
const result = this.countTotalFeedback();
const { good } = this.state;
    if (result !== 0) {
        const percentage = (good * 100) / result;
        return Math.round(percentage);
    }
    return 0;
};

  render() {
    return (
      <>
      <GlobalStyle />
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.clickXHandler}></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {this.countTotalFeedback() > 0 ? (
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics>
        ) : (
          <Notification title="There is no feedback" />
        )}
      </Section>
      </>
    );
  };
};

