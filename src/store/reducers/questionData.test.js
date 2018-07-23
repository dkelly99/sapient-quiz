// import {fromJS, Map, Set} from 'immutable';
import {questionData} from './questionData';
import {FETCH_QUESTIONS, UPDATE_NAME, UPDATE_SCOREBOARD} from '../actions/questions';

const expectedInitialState = {
    isFetching: false,
    isSubmitting: false,
    questions: [],
    name: '',
    scoreboard: [],
    result: null
};

describe('questionData', () => {
    it('Initial state should be correct', () => {
        const action = {
            type: 'SOME_RANDOM_ACTION_TYPE'
        };

        const newState = questionData(undefined, action);
        expect(newState).toEqual(expectedInitialState);
    });
    describe('When FETCH_QUESTIONS action is dispatched', () => {
        it('Then state.isFetching should be TRUE', () => {
            const action = {
                type: FETCH_QUESTIONS
            };

            const newState = questionData(undefined, action);
            expect(newState.isFetching).toEqual(true);
        });
    });

    describe('When UPDATE_NAME action is dispatched', () => {
        it('Then state.name should be updated', () => {
            const action = {
                name: 'Declan Kelly',
                type: UPDATE_NAME
            };

            const newState = questionData(undefined, action);
            expect(newState.name).toEqual('Declan Kelly');
        });
    });
    describe('When UPDATE_SCOREBOARD action is dispatched', () => {
        it('Then state.scoreboard should be updated', () => {
            const mockScoreboardData = [{name: 'John Brown', score: 32}];
            const action = {
                scoreboard: mockScoreboardData,
                type: UPDATE_SCOREBOARD
            };

            const newState = questionData(undefined, action);
            expect(newState.scoreboard).toEqual(mockScoreboardData);
        });
        it('Then state.result should be set to NULL', () => {
            const mockScoreboardData = [{name: 'John Brown', score: 32}];
            const action = {
                scoreboard: mockScoreboardData,
                type: UPDATE_SCOREBOARD
            };

            const initialState = {
                isFetching: false,
                isSubmitting: false,
                questions: [],
                name: '',
                scoreboard: [],
                result: {name: 'Declan', score: 50}
            };
            const newState = questionData(initialState, action);
            expect(newState.result).toEqual(null);
        });
        it('Then state.questions should be set to empty', () => {
            const mockScoreboardData = [{name: 'John Brown', score: 32}];
            const action = {
                scoreboard: mockScoreboardData,
                type: UPDATE_SCOREBOARD
            };
            const initialState = {
                isFetching: false,
                isSubmitting: false,
                questions: [{
                    id: "93-612-2232",
                    title: "Praesent id massa id nisl venenatis lacinia?",
                    answers: [
                        {"value": "a", "text": "Mauris ullamcorper purus sit amet nulla."},
                        {"value": "b", "text": "Suspendisse ornare consequat lectus."},
                        {"value": "c", "text": "Suspendisse ornare consequat lectus."}
                    ],
                    correctAnswer: "a"
                }],
                name: '',
                scoreboard: [],
                result: {name: 'Declan', score: 50}
            };
            const newState = questionData(initialState, action);
            expect(newState.questions).toEqual([]);
        });
    });
});
