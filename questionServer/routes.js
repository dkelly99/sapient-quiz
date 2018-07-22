import {db} from './db';

export const appRouter = (app) => {
    app.get('/api/scoreBoard', (req, res) => {
        setTimeout(() => {
            const data = db.getScoreBoard();
            res.status(200).send(data);
        }, 2000);
    });

    app.post('/api/submit', (req, res) => {
        setTimeout(() => {
            const data = req.body;
            res.status(200).json(data);
        }, 2000);
    });

    app.get('/api/questions', (req, res) => {
        setTimeout(() => {
            const data = db.getQuestions();
            res.status(200).send(data);
        }, 2000);
    });

    app.get('/api/', (req, res) => {
        res.status(200).send('Welcome to QuestionServer API!!!');
    });
};
