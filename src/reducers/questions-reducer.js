import { GET_QUESTIONS, ADD_QUESTION, DELETE_QUESTION, UPDATE_QUESTION, ADD_SUB_INPUT } from "../actions/actions";
import { loadState } from "../util/localStorage";

const questions = loadState();
const uuid4 = require('uuid/v4')

// import questions from '../data/data.json'

const initialState = {
    questions
};

const questionsReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return Object.assign({}, state, { questions: state.questions })

        case DELETE_QUESTION:
            return Object.assign({}, state, { questions: deleteQuestionById(action.id, state.questions) })

        case ADD_QUESTION:
            return Object.assign({}, state, {
                questions: [...state.questions, {
                    id: uuid4(),
                    conditionType: "",
                    conditionValue: "",
                    questionType: "text",
                    questionValue: "Pleas enter a question!",
                    subInputs: []
                }]
            })

        case UPDATE_QUESTION:
            // return Object.assign({}, state, action.update)
            return Object.assign({}, state, { questions: updateQuestionById(action.id, state.questions, action.update) })

        case ADD_SUB_INPUT:
            const newSubInput = {
                id: uuid4(),
                conditionType: "eq",
                conditionValue: "",
                questionType: "text",
                questionValue: "Please enter a question!",
                subInputs: []
            }
            return Object.assign({}, state, { questions: addSubInput(action.id, state.questions, newSubInput)})

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

function updateQuestionById(questionId, questionsArray, updateData) {
    return questionsArray.map(element => {
        if (element.id === questionId) {
            return Object.assign({}, element, updateData)
        }
        else if (element.subInputs.length) {
            element.subInputs = updateQuestionById(questionId, element.subInputs, updateData);
        }
        return element;
    })
}

function addSubInput(parentQuestionId, questionsArray, newSubInput) {

    return questionsArray.map(element => {
        if (element.id === parentQuestionId) {
            return Object.assign({}, element, element.subInputs.push(newSubInput) )
        }
        else if (element.subInputs.length) {
            element.subInputs = addSubInput(parentQuestionId, element.subInputs, newSubInput)
        }
        return element;
    })
}

export default questionsReducer;