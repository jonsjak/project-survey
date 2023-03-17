import React from "react";

export const Summary = ({ answer1, answer2, answer3, answer4 }) => {
  return (
    <div>
      <h2>Result</h2>
      <p>Thank you for taking this survey. Hopefully your contribution 
        will help mankind understand that surveys are often unwanted and extremely boring!
      </p>
      <p className="italic">Theese are the insights you provided:
      </p>
      <ul>
        <li>Question 1: Respondent Fatigue
          <ul>
            <li>Your answer: {answer1}</li>
          </ul>
        </li>
        <li>Question 2: Complicated wording
          <ul>
            <li>Your answer: {answer2}</li>
          </ul>
        </li>
        <li>Question 3: Social desirability bias
          <ul>
            <li>Your answer: {answer3}</li>
          </ul>
        </li>
        <li>Question 4: Sampling and representation
          <ul>
            <li>Your answer: {answer4}</li>
          </ul>
        </li>
      </ul>
    </div>
  )
};