import React, { Component } from 'react';
import './QuestionForm.css';
import SubQuestionForm from './QuestionForm.container';
import TypeInput from '../components/TypeInput';
import QuestionInput from '../components/QuestionInput';
import ConditionInputComponent from "../components/ConditionInputComponent";

class QuestionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: {}
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({
            question: Object.assign({}, this.state.question, { [e.target.name]: e.target.value })
        })
    }

    render() {
        const question = this.props.question;
        const deleteQuestion = this.props.deleteQuestion;
        const updateQuestion = this.props.updateQuestion;
        const addSubInput = this.props.addSubInput;
        const onChangeHandler = this.onChangeHandler;
        const parentQuestionType = this.props.parentQuestionType;
        const colorLevel = 250 - this.props.level % 5 * 14

        const isHiddenConditionFields = question.conditionType === null

        return (
            <div key={question.id} className="questionForm">
                <form
                    className="w-100 border p-3 my-2"
                    style={{ backgroundColor: `rgb(${colorLevel},${colorLevel},${colorLevel})` }}
                    onChange={(e) => {

                        if (e.target.name === "questionType") {
                            updateQuestion(question.id, { [e.target.name]: e.target.value })
                            if (question.subInputs) {
                                question.subInputs.forEach((element) => {
                                    updateQuestion(element.id, {
                                        questionType: '',
                                        conditionType: '',
                                        conditionValue: ''
                                    })
                                })
                            }
                        } else {
                            updateQuestion(question.id, { [e.target.name]: e.target.value })
                        }
                    }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        addSubInput(question.id)
                    }}

                >
                    {isHiddenConditionFields
                        ? null
                        : <ConditionInputComponent
                            question={question}
                            onChangeHandler={onChangeHandler}
                            parentQuestionType={parentQuestionType}
                        />
                    }
                    <QuestionInput
                        question={question}
                        onChangeHandler={onChangeHandler}
                    />
                    <TypeInput
                        question={question}
                        onChangeHandler={onChangeHandler}
                    />
                    <div className="d-flex justify-content-end">
                        <button
                            type="submit"
                            className="btn btn-sm mx-2 btn-primary"

                        >
                            Add Sub-Input
                        </button>
                        <button
                            type="button"
                            className="btn btn-sm btn-danger mx-2"
                            onClick={() => deleteQuestion(question.id)}
                        >
                            Delete
                        </button>
                    </div>
                </form>

                <div className="ml-5">
                    {
                        question.subInputs.length
                            ? question.subInputs.map(item => {
                                return (
                                    <SubQuestionForm
                                        level={this.props.level + 1}
                                        key={item.id}
                                        question={item}
                                        parentQuestionType={question.questionType}
                                    />
                                )
                            })
                            : null
                    }
                </div>
            </div>
        );
    }
};

export default QuestionForm;