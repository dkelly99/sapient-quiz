import express from 'express';
import bodyParser from 'body-parser';

import {appRouter} from './routes'

const PORT_NUMBER = 3009;
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});

appRouter(app);

app.listen(PORT_NUMBER, () => console.log(`
#####################################################
###   QuestionServer app listening on port ${PORT_NUMBER}!  ###
#####################################################`));
