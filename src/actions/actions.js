export const GET_QUESTIONS = 'GET_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';
export const ADD_SUB_INPUT = 'ADD_SUB_INPUT';

export function getQuestions() {
    return {
        type: GET_QUESTIONS
    };
}

export function addQuestion() {
    return {
        type: ADD_QUESTION,
    };
}

export function deleteQuestion(id) {
    return {
        type: DELETE_QUESTION,
        id
    };
}

export function updateQuestion(id, update) {
    return {
        type: UPDATE_QUESTION,
        id,
        update
    };
}

export function addSubInput(id) {
    return {
        type: ADD_SUB_INPUT,
        id
    }
}
