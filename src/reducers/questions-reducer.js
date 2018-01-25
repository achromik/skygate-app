import { GET_QUESTIONS, ADD_QUESTION, DELETE_QUESTION } from "../actions/actions";

import { loadState } from "../util/localStorage";

const questions = loadState();
const initialState = {
    questions
};

const questionsReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return Object.assign({}, state, { questions: state.questions })

        case DELETE_QUESTION:
            return Object.assign({}, state, { questions: deleteQuestionById(state.questions, action.id) })

        case ADD_QUESTION:
            return Object.assign({}, state, {
                questions: [...state.questions, {
                    id: action.id,
                    subInputs: action.subInputs
                }]
            })

        default:
            return state;
    }
};

function deleteQuestionById(data, questionId) {
    return data.filter(element => {
        if (element.subInputs.length) {
            element.subInputs = deleteQuestionById(element.subInputs, questionId)
        };
        return element.id !== questionId;
    })
}

export default questionsReducer;