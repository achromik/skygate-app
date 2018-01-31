import React from 'react';
import SubQuestionItem from './QuestionItem.container';
import './QuestionItem.css';

const Fragment = React.Fragment;

const TextInput = (props) => (
    <input
        id={props.id}
        name={props.id}
        type="text"
        className="form-control"
    />
);

const NumberInput = (props) => (
    <input
        id={props.id}
        name={props.id}
        type="number"
        className="form-control"
    />
);

const RadioInput = (props) => (
    <div id={props.id}>
        <div className="form-check form-check-inline ">
            <input
                id={`${props.id}_yes`}
                type="radio"
                className="form-check-input"
                name={props.id}
                value="Yes"

            />
            <label className="form-check-label" htmlFor={`${props.id}_yes`}>Yes</label>
        </div>
        <div className="form-check form-check-inline">
            <input
                id={`${props.id}_no`}
                type="radio"
                className="form-check-input"
                name={props.id}
                value="No"
            />
            <label className="form-check-label" htmlFor={`${props.id}_no`}>No</label>
        </div>
    </div>
);

const QuestionItem = ({ question, updateAnswers, answer, answers }) => {
    return (
        <Fragment>
            <div onChange={(e) => {
                updateAnswers(e.target.name, e.target.value);
                if (question.subInputs.length) {
                    question.subInputs.forEach((element) => {
                        updateAnswers(element.id, '');
                    });
                }
            }}>
                <div className="form-group d-block">
                    <label htmlFor={question.id} >{question.questionValue}</label>
                    {
                        printInputType(question)
                    }
                </div>
            </div>
            <div className="ml-5">
                {
                    question.subInputs.length
                        ? question.subInputs.map((element) => {
                            const answer = answers[question.id];
                            const condition = element.conditionValue;
                            const type = element.conditionType;
                            if (compareAnswerWithCondition(answer, condition, type)) {
                                return (
                                    <SubQuestionItem
                                        key={element.id}
                                        question={element}
                                        answer={answers[question.id]}
                                    />
                                );
                            }
                            return null;
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
                    <TextInput id={question.id} />
                );

            case 'radio':
                return (
                    <RadioInput id={question.id} />
                );

            case 'number':
                return (
                    <NumberInput id={question.id} />
                );

            default:
                return null;
        }
    }
};

function compareAnswerWithCondition(answer, condition, type) {
    switch (type) {
        case 'gt':
            return parseInt(answer, 10) > parseInt(condition, 10);

        case 'lt':
            return parseInt(answer, 10) < parseInt(condition, 10);

        case 'eq':
            return answer === condition;

        default:
            return undefined;
    }
}

export default QuestionItem;