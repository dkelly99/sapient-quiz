const URL = 'http://localhost:3009/api';
const routes = {
    getQuestions: URL + '/questions',
    getScoreboard: URL + '/scoreBoard',
    submitAnswers: URL + '/submit',
};

export const questionAPI = {
    getQuestions: () => {
        return fetch(routes.getQuestions).then( (response) => response.json());
    },
    getScoreboard: () => {
        return fetch(routes.getScoreboard).then( (response) => response.json());
    },
    submitAnswers: (questions, name) => {
        return fetch(routes.submitAnswers, {
            method: 'POST',
            body: JSON.stringify({questions, name}),
            headers: {'Content-Type': 'application/json'}
        }).then( (response) => response.json());
    }
};