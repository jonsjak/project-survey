import React from 'react';

export const Question2 = ({ answer2, setAnswer2 }) => {
  const q2Handler = (event) => {
    setAnswer2(event.target.value);
    console.log(answer2);
  };

  return (
    <div>
      <h3>Question 2</h3>
      <p>Another problem is that the wording sometimes
        makes it hard to understand what kind of answer is expected.</p>
      <p>Is there, in your opinion, a positive correlation between
        the utilization of a highly abstract level of aggregation, 
        manifested by the implementation of academic language in textual content,
        and the level of difficulty in comprehension experienced by you as a reader?</p>

      <label htmlFor="Answer2-select">Pick your answer:
        <select name="Answer2-select" onChange={q2Handler} value={answer2}>
          <option value="default">Choose option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="not sure">Not sure what you are asking for</option>
        </select>
      </label>
    </div>
  );
};