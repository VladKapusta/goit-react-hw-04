const ButtonsFeedback = ({ addFeedback, options }) => {
  return options.map(option => {
    return (
      <button key={option} type="button" onClick={addFeedback}>
        {option}
      </button>
    );
  });
};
export default ButtonsFeedback;
