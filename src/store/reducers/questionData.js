// import {Record, Set} from 'immutable';
import {FETCH_QUESTIONS, UPDATE_ANSWER, SET_QUESTIONS, SUBMIT_ANSWERS, RECEIVE_RESULTS} from '../actions/questions';

const initialState = {
    isFetching: false,
    isSubmitting: false,
    questions: []};

export const questionData = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_QUESTIONS:
            return {
                ...state,
                isFetching: true
            };

        case SUBMIT_ANSWERS:
            return {
                ...state,
                isSubmitting: true
            };

        case RECEIVE_RESULTS:
            return {
                ...state,
                isSubmitting: false
            };

        case SET_QUESTIONS:
            return {
                isFetching: false,
                questions: [...action.questionData]
            };

        case UPDATE_ANSWER:
            return {
                isFetching: false,
                questions: [...state.questions].map( (question) => {
                    if (question.id === action.id) {
                        question.answer = action.answer;
                    }
                    return question;
                })
            };

        default:
            return state;
    }
};
