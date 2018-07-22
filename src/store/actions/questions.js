import {Modal} from "antd/lib/index";
import {questionAPI} from '../../rest/questionsAPI';

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SUBMIT_ANSWERS = 'SUBMIT_ANSWERS';
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
export const UPDATE_ANSWER = 'UPDATE_ANSWER';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_SCOREBOARD= 'UPDATE_SCOREBOARD';

export const updateAnswer = (id, answer) => {
    return {
        id, answer,
        type: UPDATE_ANSWER
    };
};

export const updateName = (name) => {
    return {
        name,
        type: UPDATE_NAME
    };
};

export const submitAnswers = () => {
    return (dispatch, getState) => {

        const {questionData} = getState();
        const {questions} = questionData;

        const totalNumber = questions.length;
        const questionsAnswered = questions.filter( (question) => !!question.answer ).length;
        if (questionsAnswered !== totalNumber) {
            const modal = Modal.warning({
                title: 'You must answer all questions',
                content: `You have answered ${questionsAnswered} of ${totalNumber} questions.
                    Please answer all questions before submitting your answers.`,
            });
            setTimeout(() => modal.destroy(), 3000);
        } else {
            dispatch({
                //questionData,
                type: SUBMIT_ANSWERS
            });
        }
    };
};

export const fetchQuestions = () => {

    return (dispatch) => {
        //first, we immediately update loading state
        dispatch({
            type: FETCH_QUESTIONS
        });

        questionAPI.getQuestions().then( (questions) => {
            dispatch({
                questionData: questions,
                type: SET_QUESTIONS
            });
        });
    };
};

export const updateScoreboard = () => {

    return (dispatch) => {
        questionAPI.getScoreboard().then( (scoreboard) => {
            dispatch({
                scoreboard,
                type: UPDATE_SCOREBOARD
            });
        });
    };
};
