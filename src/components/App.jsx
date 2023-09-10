import { GlobalStyle } from '../global-style';
import { Section } from './section/Section';
import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './feedback-options/Feedback-options';
import { Notification } from './notification/Notification';
import { useState } from 'react';

export const App = () => {

const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);


const clickXHandler = evt => {
  if (evt === 'good') {
    setGood(prevState => prevState + 1);
  } else if (evt === 'neutral') {
    setNeutral(prevState => prevState + 1);
  } else if (evt === 'bad') {
    setBad(prevState => prevState + 1);
  } else {
    console.log('error' + evt)
  };
};

const countTotalFeedback = () => {
  const result = good + neutral + bad;
  return result;
  };

const countPositiveFeedbackPercentage = () => {
    const result = countTotalFeedback();
        if (result !== 0) {
            const percentage = (good * 100) / result;
            return Math.round(percentage);
        }
        return 0;
    };

  return (
    <>
    <GlobalStyle />
    <Section title="Please leave feedback">
      <FeedbackOptions options={Object.keys({ good, neutral, bad })} onLeaveFeedback={clickXHandler}></FeedbackOptions>
    </Section>
    <Section title="Statistics">
      {countTotalFeedback() > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}></Statistics>
      ) : (
        <Notification title="There is no feedback" />
      )}
    </Section>
    </>
  );
};

