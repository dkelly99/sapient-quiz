import {db} from '../db';

export const questions = (req, res) => {
    setTimeout(() => {
        const data = db.getQuestions();

        //now we need to remove "correctAnswer" from the response before sending it to client
        //I am using destructuring and Object.assign to make sure NOT to mutate the original values
        const questions = [...data].map( (question) => {
            const cleanQuestion = Object.assign({}, question);
            delete cleanQuestion.correctAnswer;
            return cleanQuestion;
        });
        res.status(200).send(questions);
    }, 2000);
};
