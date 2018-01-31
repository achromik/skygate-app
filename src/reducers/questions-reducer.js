import { ADD_QUESTION, DELETE_QUESTION, UPDATE_QUESTION, ADD_SUB_INPUT, TOGGLE_PRETTY_EXPORT, UPDATE_ANSWERS, RESET_ANSWERS } from "../actions/actions";
// import { loadState } from "../util/localStorage";
import questions from '../data/data.json';

// const questions = loadState();
const uuid4 = require('uuid/v4');

const initialState = {
    questions,
    answers: {},
    isPretyExport: false
};

const questionsReducer = function (state = initialState, action) {
    switch (action.type) {

        case DELETE_QUESTION:
            return Object.assign({}, state, { questions: deleteQuestionById(action.id, state.questions) });

        case ADD_QUESTION:
            return Object.assign({}, state, {
                questions: [
                    ...state.questions,
                    {
                        id: uuid4(),
                        conditionType: null,
                        conditionValue: null,
                        questionType: "",
                        questionValue: "",
                        subInputs: [],
                    }
                ]
            });

        case UPDATE_QUESTION:
            return Object.assign({}, state, {
                questions: updateQuestionById(action.id, state.questions, action.update)
            });

        case ADD_SUB_INPUT:
            const newSubInput = {
                id: uuid4(),
                conditionType: "",
                conditionValue: "",
                questionType: "",
                questionValue: "",
                subInputs: [],
            };
            return Object.assign({}, state, {
                questions: addSubInput(action.id, state.questions, newSubInput)
            });

        case TOGGLE_PRETTY_EXPORT:
            return Object.assign({}, state, { isPretyExport: !state.isPretyExport });

        case UPDATE_ANSWERS:
            return Object.assign({}, state, {
                answers: {
                    ...state.answers,
                    [`${action.id}`]: action.answer
                }
            });

        case RESET_ANSWERS:
            return Object.assign({}, state, { answers: {} });

        default:
            return state;
    }
};

function deleteQuestionById(questionId, questionsArray) {
    return questionsArray.filter(element => {
        if (element.subInputs.length) {
            element.subInputs = deleteQuestionById(questionId, element.subInputs);
        };
        return element.id !== questionId;
    });
}

function updateQuestionById(questionId, questionsArray, updateQuestionData) {
    return questionsArray.map(element => {
        if (element.id === questionId) {
            return Object.assign({}, element, updateQuestionData);
        }
        else if (element.subInputs.length) {
            element.subInputs = updateQuestionById(questionId, element.subInputs, updateQuestionData);
        }
        return element;
    });
}

function addSubInput(parentQuestionId, questionsArray, newSubInput) {
    return questionsArray.map(element => {
        if (element.id === parentQuestionId) {
            return Object.assign({}, element, element.subInputs.push(newSubInput));
        }
        else if (element.subInputs.length) {
            element.subInputs = addSubInput(parentQuestionId, element.subInputs, newSubInput);
        }
        return element;
    });
}

export default questionsReducer;