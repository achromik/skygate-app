import { GET_QUESTIONS, ADD_QUESTION, DELETE_QUESTION, UPDATE_QUESTION, ADD_SUB_INPUT, TOGGLE_PRETTY_EXPORT, FIND_QUESTION_BY_ID, UPDATE_ANSWERS, RESET_ANSWERS } from "../actions/actions";
import { loadState } from "../util/localStorage";
// import questions from '../data/data.json';

const questions = loadState();
const uuid4 = require('uuid/v4')

const initialState = {
    questions,
    searchResult: {},
    answers: {},
    isPretyExport: false
};

const questionsReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return Object.assign({}, state, { questions: state.questions })

        case DELETE_QUESTION:
            return Object.assign({}, state, { questions: deleteQuestionById(action.id, state.questions) })

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
            })

        case UPDATE_QUESTION:
            // return Object.assign({}, state, action.update)
            return Object.assign({}, state, {
                questions: updateQuestionById(action.id, state.questions, action.update)
            })

        case ADD_SUB_INPUT:
            const newSubInput = {
                id: uuid4(),
                conditionType: "",
                conditionValue: "",
                questionType: "",
                questionValue: "",
                subInputs: [],
            }
            return Object.assign({}, state, {
                questions: addSubInput(action.id, state.questions, newSubInput)
            })

        case TOGGLE_PRETTY_EXPORT:
            return Object.assign({}, state, { isPretyExport: !state.isPretyExport })

        case FIND_QUESTION_BY_ID:
            return Object.assign({}, state, { searchResult: findQuestionById(questions, action.id) })

        case UPDATE_ANSWERS:
            return Object.assign({}, state, {
                answers: {
                    ...state.answers,
                    [`${action.id}`]: action.answer
                }
            })

        case RESET_ANSWERS:
            return Object.assign({}, state, { answers: {} })

        default:
            return state;
    }
};

function deleteQuestionById(questionId, questionsArray) {
    return questionsArray.filter(element => {
        if (element.subInputs.length) {
            element.subInputs = deleteQuestionById(questionId, element.subInputs)
        };
        return element.id !== questionId;
    })
}

function updateQuestionById(questionId, questionsArray, updatequestionsArray) {
    return questionsArray.map(element => {
        if (element.id === questionId) {
            return Object.assign({}, element, updatequestionsArray)
        }
        else if (element.subInputs.length) {
            element.subInputs = updateQuestionById(questionId, element.subInputs, updatequestionsArray);
        }
        return element;
    })
}

function addSubInput(parentQuestionId, questionsArray, newSubInput) {

    return questionsArray.map(element => {
        if (element.id === parentQuestionId) {
            return Object.assign({}, element, element.subInputs.push(newSubInput))
        }
        else if (element.subInputs.length) {
            element.subInputs = addSubInput(parentQuestionId, element.subInputs, newSubInput)
        }
        return element;
    })
}


function findQuestionById(questionsArray, questionId) {
    var result;
    for (var i = 0; i < questionsArray.length; i++) {

        if (questionsArray[i].id === questionId) {

            return questionsArray[i];
        }
        if (questionsArray[i].subInputs.length) {
            result = findQuestionById(questionsArray[i].subInputs, questionId)
        }
    }
    return result;
}

export default questionsReducer;