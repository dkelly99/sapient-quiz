import {submit} from "./submit";
/*
#################################################################
This test file is not being triggered because it is outside the /src folder
I have included it here purely as an example of the type of test that we would have for this server-side logic
#################################################################
 */
const mockResponseSend = jest.fn();
const mockDBupdateScoreBoard = jest.fn();

jest.mock('../db', () => ({
    getQuestions: () => {
        return [{
            id: "93-612-2232",
            title: "Praesent id massa id nisl venenatis lacinia?",
            answers: [
                {"value": "a", "text": "Mauris ullamcorper purus sit amet nulla."},
                {"value": "b", "text": "Suspendisse ornare consequat lectus."},
                {"value": "c", "text": "Suspendisse ornare consequat lectus."}
            ],
            correctAnswer: "a"
        }]
    },
    updateScoreBoard: mockDBupdateScoreBoard
}));

describe('routes - submit', () => {

    describe('When /api/submit route is called', () => {
        it('Then it should update the Database scoreboard  with the new score ', () => {
            const mockRequest = {
                body: {
                    questions: [{
                        id: "93-612-2232",
                        answer: 'a'
                    }],
                    name: 'TEST_NAME'
                }
            };
            const mockResponse = {
                status: () => ({
                    send: mockResponseSend
                })
            };

            submit(mockRequest, mockResponse);
            expect(mockDBupdateScoreBoard.mock.calls.length).toBe(1);
        });
    });
});
