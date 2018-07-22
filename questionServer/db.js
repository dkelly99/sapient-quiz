const cachedData = {
    scoreBoard: [
        {name: 'John Brown', score: 32},
        {name: 'Jim Green', score: 42},
        {name: 'Joe Black',score: 32}
    ],
    questionData: [{
        "id": "93-612-2232",
        "title": "Praesent id massa id nisl venenatis lacinia?",
        "answers": [
            {
                "value": "a",
                "text": "Mauris ullamcorper purus sit amet nulla."
            },
            {
                "value": "b",
                "text": "Suspendisse ornare consequat lectus."
            },
            {
                "value": "c",
                "text": "Suspendisse ornare consequat lectus."
            },
            {
                "value": "d",
                "text": "Vivamus vel nulla eget eros elementum pellentesque."
            }
        ],
        "correctAnswer": "a"
    }, {
        "id": "71-729-5401",
        "title": "Maecenas rhoncus aliquam lacus?",
        "answers": [
            {
                "value": "a",
                "text": "Etiam pretium iaculis justo."
            },
            {
                "value": "b",
                "text": "Aenean fermentum."
            },
            {
                "value": "c",
                "text": "Nunc purus."
            },
            {
                "value": "d",
                "text": "Vestibulum rutrum rutrum neque."
            }
        ],
        "correctAnswer": "a"
    }, {
        "id": "22-362-0402",
        "title": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl?",
        "answers": [
            {
                "value": "a",
                "text": "Etiam pretium iaculis justo."
            },
            {
                "value": "b",
                "text": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante."
            },
            {
                "value": "c",
                "text": "Suspendisse accumsan tortor quis turpis."
            },
            {
                "value": "d",
                "text": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
            }
        ],
        "correctAnswer": "b"
    }, {
        "id": "66-402-9161",
        "title": "In congue?",
        "answers": [
            {
                "value": "a",
                "text": "Nullam varius."
            },
            {
                "value": "b",
                "text": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
            },
            {
                "value": "c",
                "text": "Curabitur at ipsum ac tellus semper interdum."
            },
            {
                "value": "d",
                "text": "Sed vel enim sit amet nunc viverra dapibus."
            }
        ],
        "correctAnswer": "d"
    }, {
        "id": "43-918-5397",
        "title": "Cras in purus eu magna vulputate luctus?",
        "answers": [
            {
                "value": "a",
                "text": "Morbi ut odio."
            },
            {
                "value": "b",
                "text": "In eleifend quam a odio."
            },
            {
                "value": "c",
                "text": "Phasellus id sapien in sapien iaculis congue."
            },
            {
                "value": "d",
                "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
            }
        ],
        "correctAnswer": "b"
    }, {
        "id": "91-231-0742",
        "title": "Donec semper sapien a libero?",
        "answers": [
            {
                "value": "a",
                "text": "Praesent lectus."
            },
            {
                "value": "b",
                "text": "Aenean lectus."
            },
            {
                "value": "c",
                "text": "Vivamus vestibulum sagittis sapien."
            },
            {
                "value": "d",
                "text": "Etiam vel augue."
            }
        ],
        "correctAnswer": "d"
    }, {
        "id": "94-284-2498",
        "title": "Aenean auctor gravida sem?",
        "answers": [
            {
                "value": "a",
                "text": "Nullam porttitor lacus at turpis."
            },
            {
                "value": "b",
                "text": "In hac habitasse platea dictumst."
            },
            {
                "value": "c",
                "text": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo."
            },
            {
                "value": "d",
                "text": "Integer non velit."
            }
        ],
        "correctAnswer": "a"
    }, {
        "id": "03-061-3314",
        "title": "Pellentesque viverra pede ac diam?",
        "answers": [
            {
                "value": "a",
                "text": "Duis bibendum."
            },
            {
                "value": "b",
                "text": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
            },
            {
                "value": "c",
                "text": "Nam nulla."
            },
            {
                "value": "d",
                "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
            }
        ],
        "correctAnswer": "c"
    }, {
        "id": "54-665-6473",
        "title": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue?",
        "answers": [
            {
                "value": "a",
                "text": "Duis ac nibh."
            },
            {
                "value": "b",
                "text": "Morbi a ipsum."
            },
            {
                "value": "c",
                "text": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc."
            },
            {
                "value": "d",
                "text": "Curabitur convallis."
            }
        ],
        "correctAnswer": "b"
    }, {
        "id": "98-009-5810",
        "title": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc?",
        "answers": [
            {
                "value": "a",
                "text": "Morbi a ipsum."
            },
            {
                "value": "b",
                "text": "Aenean auctor gravida sem."
            },
            {
                "value": "c",
                "text": "In hac habitasse platea dictumst."
            },
            {
                "value": "d",
                "text": "In hac habitasse platea dictumst."
            }
        ],
        "correctAnswer": "a"
    }]
};

export const db = {
    getScoreBoard: () => cachedData.scoreBoard,

    updateScoreBoard: (name, score) => cachedData.scoreBoard.push({name, score}),

    getQuestions: () => cachedData.questionData
};