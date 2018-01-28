import React from 'react';
import SubQuestionItem from "./QuestionItem.container";

const Fragment = React.Fragment;

const QuestionItem = ({ question, updateAnswers, answer, answers }) => {
    return (
        <Fragment>
            <form
                style={showSubQuestionsHandler(answer, question.conditionValue)}
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="form-group d-block">
                    <label htmlFor={question.id} >{question.questionValue}</label>
                    {printInputType(question)}
                </div>
            </form >
            <div className="ml-5">
                {
                    question.subInputs.length
                        ? question.subInputs.map((element) => {
                            return <SubQuestionItem
                                key={element.id}
                                question={element}
                                answer={answers[`${question.id}`]}
                            />
                        })
                        : null
                }
            </div>
        </Fragment>
    );

    function showSubQuestionsHandler(answer, condition) {
        if (answer) { answer = answer.toUpperCase()}
        if (condition) { condition = condition.toUpperCase()}
        
        switch (question.conditionType) {
            case 'eq':
                return answer === condition
                    ? { display: 'block' }
                    : { display: 'none' }

            case 'gt':
                return answer > condition
                    ? { display: 'block' }
                    : { display: 'none' }

            case 'lt':
                return answer < condition
                    ? { display: 'block' }
                    : { display: 'none' }

            default:
                return ({ display: 'block' })
        }
    }

function printInputType(question) {
    switch (question.questionType) {
        case 'text':
            return (
                <input
                    id={question.id}
                    name={question.id}
                    type={question.questionType}
                    className="form-control"
                    onChange={(e) => {
                        updateAnswers(e.target.name, e.target.value)
                    }}
                />
            )

        case 'radio':
            return (
                <div
                    id={question.id}
                    onChange={(e) => {
                        updateAnswers(e.target.name, e.target.value)
                    }}
                >
                    <div className="form-check form-check-inline ">
                        <input
                            id={`${question.id}_yes`}
                            type="radio"
                            className="form-check-input"
                            name={question.id}
                            value="Yes"

                        />
                        <label className="form-check-label" htmlFor={`${question.id}_yes`}>Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            id={`${question.id}_no`}
                            type="radio"
                            className="form-check-input"
                            name={question.id}
                            value="No"
                        />
                        <label className="form-check-label" htmlFor={`${question.id}_no`}>No</label>
                    </div>
                </div>
            )

        case 'number':
            return (
                <input
                    id={question.id}
                    name={question.id}
                    type={question.questionType}
                    className="form-control"
                    onChange={(e) => {
                        updateAnswers(e.target.name, e.target.value)
                    }}
                />
            )

        default:
            return null
    }
}
}

export default QuestionItem;