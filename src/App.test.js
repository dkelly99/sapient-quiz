import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {getQuestions, submitAnswers, updateAnswer, updateName, updateScoreboard} from "./store/actions/questions";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App
    questionData={[]}
    isFetching={false}
    isSubmitting={false}
    name={''}
    scoreBoardData={[]}
    result={null}

    updateAnswer={jest.fn()}
    updateName={jest.fn()}
    getQuestions={jest.fn()}
    submitAnswers={jest.fn()}
    updateScoreboard={jest.fn()}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
