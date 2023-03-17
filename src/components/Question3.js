import React from 'react';

export const Question3 = ({ answer3, setAnswer3 }) => {
  const q3Handler = (event) => {
    setAnswer3(event.target.value);
  };

  return (
    <div>
      <h3>Question 3</h3>
      <p>People may be hesitant to provide honest answers to sensitive questions, 
        especially if they feel their responses could be viewed negatively.
        This can result in respondents providing answers that they think are socially desirable,
        rather than truly reflective of their thoughts and experiences.</p>
      <p className="italic">How honest are you when taking surveys?</p>
      <label htmlFor="honesty-range">Rate your honesty level
        <input id="honestyRange" name="honesty-range" type="range" min="0" max="10" value={answer3} onChange={q3Handler}/>
      </label>
    </div>
  );
};