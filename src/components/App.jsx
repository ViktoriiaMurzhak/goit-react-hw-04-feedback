import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { Statistics } from './Statistics';

import { Section } from './Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = button => {
    switch (button) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default: {
        return;
      }
    }
  };

  const countTotal = () => {
    const values = [good, neutral, bad];
    return values.reduce((a, b) => (a += b), 0);
  };

  const positivePercentage = () => {
    const count = (good / countTotal()) * 100;
    const percent = Number.parseInt(count);
    return good !== 0 ? percent + '%' : '0%';
  };

  const buttonText = ['good', 'neutral', 'bad'];

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={buttonText} onLeaveFeedback={onLeaveFeedback} />
      {countTotal() > 0 ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            positivePercentage={positivePercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </Section>
  );
};
