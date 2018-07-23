import {questionAPI} from '../../rest/questionsAPI';

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SUBMIT_ANSWERS = 'SUBMIT_ANSWERS';
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
export const UPDATE_ANSWER = 'UPDATE_ANSWER';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_SCOREBOARD = 'UPDATE_SCOREBOARD';
export const SHOW_RESULTS = 'SHOW_RESULTS';

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
        const {questions, name} = questionData;

        dispatch({
            type: SUBMIT_ANSWERS
        });
        questionAPI.submitAnswers(questions, name).then( (result) => {
            dispatch({
                result,
                type: SHOW_RESULTS
            });
        });
    };
};

export const getQuestions = () => {

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
                scoreboard: scoreboard,
                type: UPDATE_SCOREBOARD
            });
        }).catch( () => {
            dispatch({
                scoreboard: null,
                type: UPDATE_SCOREBOARD
            });
        });
    };
};
