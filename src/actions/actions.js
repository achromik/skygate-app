export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const DELETE_QUESTION = 'DELETE_QUESTION';

export function getQuestions() {
    return {
        type: GET_QUESTIONS
    };
}

export function addQuestion() {
    return {
        type: ADD_QUESTION
    };
}

export function deleteQuestion(id) {
    return {
        type: DELETE_QUESTION,
        id
    };
}
