import {Modal} from "antd/lib/index";
import {mockQuestionData} from "../mockQuestionData";

export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SUBMIT_ANSWERS = 'SUBMIT_ANSWERS';
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
export const UPDATE_ANSWER = 'UPDATE_ANSWER';
export const UPDATE_NAME = 'UPDATE_NAME';

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

        //we then wait for the questions to be returned before setting the question data
        setTimeout(() => {
            dispatch({
                questionData: mockQuestionData,
                type: SET_QUESTIONS
            });
        }, 2000);

    };
};
