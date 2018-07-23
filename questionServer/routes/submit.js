import {db} from '../db';

export const submit = (req, res) => {
    const data = req.body;
    const submittedQuestions = data.questions;
    const sourceQuestions = db.getQuestions();
    const name = data.name;
    let score = 0;

    submittedQuestions.forEach( (submittedQuestion) => {
        const sourceQuestion = sourceQuestions.find( (item) => item.id === submittedQuestion.id );
        if (submittedQuestion.answer === sourceQuestion.correctAnswer) {
            score += 5;
        }
    });

    db.updateScoreBoard(name, score);
    res.status(200).send({name, score});
};