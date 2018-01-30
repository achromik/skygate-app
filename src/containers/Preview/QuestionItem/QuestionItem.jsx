import React from 'react';
import SubQuestionItem from "./QuestionItem.container";

const Fragment = React.Fragment;

const QuestionItem = ({ question, updateAnswers, answer, answers }) => {
    return (
        <Fragment>
            <form
                onSubmit={(e) =>
                    e.preventDefault()
                }
                onChange={(e) => {
                    updateAnswers(e.target.name, e.target.value)
                    if (question.subInputs.length) {
                        question.subInputs.forEach((element) => {
                            updateAnswers(element.id, '')
                        })
                    }
                }}
            >
                <div className="form-group d-block">
                    <label htmlFor={question.id} >{question.questionValue}</label>
                    {
                        printInputType(question)
                    }
                </div>
            </form >
            <div className="ml-5">
                {
                    question.subInputs.length
                        ? question.subInputs.map((element) => {
                            const answer = answers[`${question.id}`];
                            const condition = element.conditionValue;
                            const type = element.conditionType;
                            if (compareAnswerWithCondition(answer, condition, type)) {
                                return (
                                    <SubQuestionItem
                                        key={element.id}
                                        question={element}
                                        answer={answers[`${question.id}`]}
                                    />
                                )
                            }
                            return null
                        })
                        : null
                }
            </div>
        </Fragment>
    );

    function printInputType(question) {
        switch (question.questionType) {
            case 'text':
                return (
                    <input
                        id={question.id}
                        name={question.id}
                        type={question.questionType}
                        className="form-control"
                    />
                )

            case 'radio':
                return (
                    <div
                        id={question.id}
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
                    />
                )

            default:
                return null
        }
    }
}

function compareAnswerWithCondition(answer, condition, type) {
    switch (type) {
        case 'gt':
            return parseInt(answer, 10) > parseInt(condition, 10)

        case 'lt':
            return parseInt(answer, 10) < parseInt(condition, 10)

        case 'eq':
            return answer === condition

        default:
            return undefined
    }
}

export default QuestionItem;