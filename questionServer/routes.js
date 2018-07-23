import {db} from './db';

export const appRouter = (app) => {
    app.get('/api/scoreBoard', (req, res) => {
        setTimeout(() => {
            const data = db.getScoreBoard();
            res.status(200).send(data);
        }, 500);
    });

    app.post('/api/submit', (req, res) => {
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
    });

    app.get('/api/questions', (req, res) => {
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
    });

    app.get('/api/', (req, res) => {
        res.status(200).send('Welcome to QuestionServer API!!!');
    });
};
