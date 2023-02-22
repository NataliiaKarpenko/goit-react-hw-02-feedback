import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FeedbackOptions } from './feedback-options/FeedbackOptions';
import { AppContainer } from './app-container/AppContainer';
import { FeedbackStats } from './feedback-stats/FeedbackStats';
import { NotificationMessage } from './notification-message/NotificationMessage';

export class App extends Component {
  static defaultProps = {
    initialGoodNumber: 0,
    initialNeutralNumber: 0,
    initialBadNumber: 0,
  };

  state = {
    good: this.props.initialGoodNumber,
    neutral: this.props.initialNeutralNumber,
    bad: this.props.initialBadNumber,
  };

  static propTypes = {
    initialGoodNumber: PropTypes.number,
    initialNeutralNumber: PropTypes.number,
    initialBadNumber: PropTypes.number,
  };

  addFeedback = options => {
    this.setState(prevState => ({ [options]: prevState[options] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral } = this.state;
    const positivePercentage = Math.round(
      ((good + neutral) / this.countTotalFeedback()) * 100
    );
    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      state,
      addFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <>
        <AppContainer title="Please, leave your feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            onLeavingFeedback={addFeedback}
          />
        </AppContainer>

        <AppContainer title="Statistics">
          {countTotalFeedback() === 0 ? (
            <NotificationMessage message="There is no feedback" />
          ) : (
            <FeedbackStats
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </AppContainer>
      </>
    );
  }
}
