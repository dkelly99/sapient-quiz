const URL = 'http://localhost:3009/api';
const routes = {
    getQuestions: URL + '/questions',
    getScoreboard: URL + '/scoreBoard'
};

export const questionAPI = {
    getQuestions: () => {
        return fetch(routes.getQuestions).then( (response) => response.json());
    },
    getScoreboard: () => {
        return fetch(routes.getScoreboard).then( (response) => response.json());
    }
};