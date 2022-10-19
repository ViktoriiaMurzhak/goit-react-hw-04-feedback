import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { Statistics } from './Statistics';

import { Section } from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  doStatValue = param => {
    this.setState(prevState => {
      return {
        [param]: prevState[param] + 1,
      };
    });
  };

  countTotal = () => {
    const values = Object.values(this.state);
    return values.reduce((a, b) => (a += b), 0);
  };

  positivePercentage = () => {
    const count = (this.state.good / this.countTotal()) * 100;
    const percent = Number.parseInt(count);
    return this.state.good !== 0 ? percent + '%' : '0%';
  };

  render() {
    const buttonText = Object.keys(this.state);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={buttonText}
          onLeaveFeedback={this.doStatValue}
        />
        <>{renderStatistics(this)}</>
      </Section>
    );
  }
}

function renderStatistics(params) {
  const { good, neutral, bad } = params.state;

  return (
    <>
      {params.countTotal() > 0 ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={params.countTotal()}
            positivePercentage={params.positivePercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </>
  );
}
