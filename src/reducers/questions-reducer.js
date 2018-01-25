import { GET_QUESTIONS, ADD_QUESTION, DELETE_QUESTION } from "../actions/actions";
import questionsData from '../data/data.json'

const initialState = {
    questions: questionsData
};

const questionsReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return Object.assign({}, state, { questions: state.questions })
        case DELETE_QUESTION:
            return Object.assign({}, state, { questions: deleteQuestionById(state.questions, action.id) })
        case ADD_QUESTION:
            return null    
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