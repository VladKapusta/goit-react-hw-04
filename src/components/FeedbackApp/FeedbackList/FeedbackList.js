const FeedbackList = ({ options, totalComents, positiveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <p key={option[0]}>
            {option[0]}:{option[1]}
          </p>
        );
      })}
      <p>TotalComents: {totalComents()}</p>
      <p>
        Positive feedback: {positiveFeedback() > 0 ? positiveFeedback() : 0}%
      </p>
    </div>
  );
};

export default FeedbackList;
