import React, { Component } from 'react';
import './QuestionForm.css';
import SubQuestionForm from './QuestionForm.container';

const Fragment = React.Fragment;

class QuestionForm extends Component {
    constructor(props) {
        console.log(props)
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

        const hiddenCondition = question.conditionType ? "" : "hidden";

        const printCondtionTypeField = (type) => {
            switch (type) {
                case "text":
                case "radio":
                    return (
                        <option value="eq">Equals</option>
                    );
                case "number":
                    return (
                        <Fragment>
                            <option value="eq">Equals</option>
                            <option value="gt">Greather than</option>
                            <option value="lt">Less than</option>
                        </Fragment>
                    );
                default:
                    return null;
            }
        }

        const printCondtionValueField = (value, type) => {
            switch (type) {
                case "text":
                case "number":
                    return (
                        <input
                            type={type}
                            name="conditionValue"
                            className="form-control form-control-sm"
                            value={value}
                            onChange={(e) => this.onChangeHandler(e)}
                        />
                    );
                case "radio":
                    return (
                        <select
                            type="text"
                            name="conditionValue"
                            className="form-control form-control-sm"
                            value={value}
                            onChange={(e) => onChangeHandler(e)}
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    );
                default:
                    return null;
            }
        }

        return (
            <div key={question.id} className="questionForm">
                <form
                    className="w-100 border p-3 my-2"
                    style={{ backgroundColor: `rgb(${colorLevel},${colorLevel},${colorLevel})` }}
                    onChange={(e) => updateQuestion(question.id, { [e.target.name]: e.target.value })}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className={`form-group row ${hiddenCondition}`} data-name="condition" >
                        <label className="col-form-label col-form-label-sm col-sm-3 " >Condition</label>
                        <div className="col-sm-5">
                            <select
                                type="text"
                                name="conditionType"
                                className="form-control form-control-sm"
                                value={question.conditionType}
                                onChange={(e) => onChangeHandler(e)}
                            >
                                {printCondtionTypeField(parentQuestionType)}
                            </select>
                        </div>
                        <div className="col-sm-4">
                            {printCondtionValueField(question.conditionValue, parentQuestionType)}
                        </div>
                    </div>
                    <div className="form-group row" data-name="question">
                        <label className="col-form-label col-form-label-sm col-sm-3 ">Question</label>
                        <div className="col-sm-9">
                            <input
                                type="text"
                                name="questionValue"
                                className="form-control form-control-sm"
                                value={question.questionValue}
                                onChange={(e) => onChangeHandler(e)}
                            />
                        </div>
                    </div>
                    <div className="form-group row" data-name="type">
                        <label className="col-form-label col-form-label-sm col-sm-3 ">Type</label>
                        <div className="col-sm-9">
                            <select
                                type="text"
                                name="questionType"
                                className="form-control form-control-sm"
                                value={question.questionType}
                                onChange={(e) => onChangeHandler(e)}
                            >
                                <option value="text">Text</option>
                                <option value="radio">Yes/No</option>
                                <option value="number">Number</option>
                            </select>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button
                            type="button"
                            className="btn btn-sm mx-2 btn-primary"
                            onClick={() => addSubInput(question.id)}
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
                                        // deleteQuestion={deleteQuestion}
                                        // updateQuestion={updateQuestion}
                                        // addSubInput={addSubInput}
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
}

export default QuestionForm;