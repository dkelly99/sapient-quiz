import {db} from '../db';
import {submit} from './submit';
import {questions} from "./questions";

export const appRouter = (app) => {
    app.get('/api/scoreBoard', (req, res) => {
        setTimeout(() => {
            const data = db.getScoreBoard();
            res.status(200).send(data);
        }, 500);
    });

    app.post('/api/submit', submit);

    app.get('/api/questions', questions);

    app.get('/api/', (req, res) => {
        res.status(200).send('Welcome to QuestionServer API!!!');
    });
};
