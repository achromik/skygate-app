export const ADD_QUESTION = 'ADD_QUESTION';
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';
export const ADD_SUB_INPUT = 'ADD_SUB_INPUT';
export const TOGGLE_PRETTY_EXPORT = 'TOGGLE_PRETTY_EXPORT';
export const UPDATE_ANSWERS = 'UPDATE_ANSWERS';
export const RESET_ANSWERS = 'RESET_ANSWERS';

export const addQuestion = () => {
    return {
        type: ADD_QUESTION,
    };
};

export const deleteQuestion = (id) => {
    return {
        type: DELETE_QUESTION,
        id
    };
};

export const updateQuestion = (id, update) => {
    return {
        type: UPDATE_QUESTION,
        id,
        update
    };
};

export const addSubInput = (id) => {
    return {
        type: ADD_SUB_INPUT,
        id
    };
};

export const togglePrettyExport = () => {
    return {
        type: TOGGLE_PRETTY_EXPORT
    };
};

export const updateAnswers = (id, answer) => {
    return {
        type: UPDATE_ANSWERS,
        id,
        answer
    };
};

export const resetAnswers = () => {
    return {
        type: RESET_ANSWERS
    };
};