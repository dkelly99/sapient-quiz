// import {fromJS, Map, Set} from 'immutable';
import {questionData} from './questionData';
import {FETCH_QUESTIONS} from '../actions/questions';

const expectedInitialState = {
    isFetching: false,
    isSubmitting: false,
    questions: [],
    name: ''
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


    /*describe('When we add an object to a SET twice', () => {
        it('Then it should only exist once in the SET', () => {
            const obj: any = {test: 123};
            const state: { [key: string]: Set<any>} = {
                mySet: Set([fromJS(obj)])
            };
            state.mySet.add(fromJS({test: 456}));
            console.dir({mySet: state.mySet.toJS()});

            expect(state.mySet.toJS()).toEqual([{test: 123}]);
        });
    });*/
});
