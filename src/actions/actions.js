export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const DELETE_QUESTION = 'DELETE_QUESTION';
const uuid4 = require('uuid/v4')

export function getQuestions() {
    return {
        type: GET_QUESTIONS
    };
}

export function addQuestion() {
    return {
        type: ADD_QUESTION,
        id: uuid4(),
        subInputs: []
    };
}

export function deleteQuestion(id) {
    return {
        type: DELETE_QUESTION,
        id
    };
}
