import React, { useState } from 'react';
import { Question1 } from 'components/Question1';
import { Question2 } from 'components/Question2';
import { Question3 } from 'components/Question3';
import { Welcome } from 'components/Welcome';
import { Summary } from 'components/Summary';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const questionHandler = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      {counter === 0 && (
        <Welcome />
      )}
      {counter === 1 && (
        <Question1 />
      )}
      {counter === 2 && (
        <Question2 />
      )}
      {counter === 3 && (
        <Question3 />
      )}
      {counter > 3 && (
        <Summary />
      )}
      <button
        type="button"
        onClick={questionHandler}>
        {counter === 0 ? 'Start survey' : 'Next question'}
      </button>
    </div>
  )
};
