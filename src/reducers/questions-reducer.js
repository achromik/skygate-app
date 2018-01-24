import { GET_QUESTIONS, ADD_QUESTION, DELETE_QUESTION } from "../actions/actions";
import questionsData from '../data/data.json'

const initialState = {
    questions: questionsData
};

const questionsReducer = function (state = initialState, action) {
    switch(action.type) {
        case GET_QUESTIONS:
            return Object.assign({}, state, {questions: state.questions})
    }

    return state;
};

export default questionsReducer;