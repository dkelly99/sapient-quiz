import express from 'express';
import bodyParser from 'body-parser';

import {appRouter} from './routes'

const PORT_NUMBER = 3009;
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

appRouter(app);

app.listen(PORT_NUMBER, () => console.log(`
#####################################################
###   QuestionServer app listening on port ${PORT_NUMBER}!  ###
#####################################################`));
