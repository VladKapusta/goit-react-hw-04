import { useState } from 'react';
import ButtonsFeedback from './ButtonsFeedback/ButtonsFeedback';
import FeedbackList from './FeedbackList/FeedbackList';
import Notification from './Notification/Notification';
import Section from './Section/Section';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = {
    good,
    neutral,
    bad,
  };

  const addFeedback = e => {
    const nameFeedback = e.target.textContent;

    switch (nameFeedback) {
      case 'good':
        setGood(good => good + 1);
        return;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        return;
      case 'bad':
        setBad(bad => bad + 1);
        return;

      default:
        return;
    }
  };
  const countTotalFeedback = function () {
    return good + neutral + bad;
  };

  const parccentagePositiveFeedback = function () {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section titel={'Please leave feedback'}>
        <ButtonsFeedback
          options={Object.keys(feedback)}
          addFeedback={addFeedback}
        />
      </Section>
      <Section titel={'Statistics'}>
        {countTotalFeedback() !== 0 ? (
          <FeedbackList
            options={Object.entries(feedback)}
            totalComents={countTotalFeedback}
            positiveFeedback={parccentagePositiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
