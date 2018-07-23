// import {Record, Set} from 'immutable';
import {FETCH_QUESTIONS, UPDATE_ANSWER, SET_QUESTIONS, SUBMIT_ANSWERS,
    RECEIVE_RESULTS, UPDATE_NAME, UPDATE_SCOREBOARD, SHOW_RESULTS} from '../actions/questions';

const initialState = {
    isFetching: false,
    isSubmitting: false,
    questions: [],
    name: '',
    scoreboard: [],
    result: null
};

export const questionData = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: action.name
            };
        case UPDATE_SCOREBOARD:
            return {
                ...state,
                result: null,
                questions: [],
                scoreboard: action.scoreboard
            };

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
                ...state,
                isFetching: false,
                questions: [...action.questionData]
            };

        case UPDATE_ANSWER:
            return {
                ...state,
                isFetching: false,
                questions: [...state.questions].map( (question) => {
                    if (question.id === action.id) {
                        question.answer = action.answer;
                    }
                    return question;
                })
            };
        case SHOW_RESULTS:
            return {
                ...state,
                isSubmitting: false,
                result: action.result
            };
        default:
            return {...state};
    }
};
