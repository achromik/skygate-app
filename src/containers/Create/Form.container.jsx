import React, { Component } from 'react';
import './FormContainer.css';

const Fragment = React.Fragment;

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: {
                conditionType: '',
                conditionValue: '',
                questionType: '',
                questionValue: '',
                subInputs: []
            }
        }
    }

    render() {
        const question = this.props.question;
        return (printForm(question, this.props.deleteQuestion))
    }
}

function printForm(question, deleteQuestion, parentQuestionType = null) {
    const hiddenCondition = question.conditionType ? "" : "hidden";
    return (
        <div key={question.id} className="questionForm">
            <form className="w-100 border p-3 my-2">
                <div className={`form-group row ${hiddenCondition}`} data-name="condition" >
                    <label className="col-form-label col-form-label-sm col-sm-3 " >Condition</label>
                    <div className="col-sm-5">
                        <select type="text" className="form-control form-control-sm" value={question.conditionType}>
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
                        <input type="text" className="form-control form-control-sm" value={question.questionValue} />
                    </div>
                </div>
                <div className="form-group row" data-name="type">
                    <label className="col-form-label col-form-label-sm col-sm-3 ">Type</label>
                    <div className="col-sm-9">
                        <select type="text" className="form-control form-control-sm" value={question.questionType} >
                            <option value="text">Text</option>
                            <option value="radio">Yes/No</option>
                            <option value="number">Number</option>
                        </select>
                    </div>
                </div>
                <div className="clearfix">
                    <button
                        type="button"
                        className="btn btn-sm btn-outline-danger mx-2 float-right"
                        onClick={() => deleteQuestion(question.id)}
                    >
                        Delete
                    </button>
                    <button type="button" className="btn btn-sm mx-2 btn-outline-primary float-right">Add Sub-Input</button>
                </div>
            </form>

            <div className="ml-4">
                {
                    question.subInputs.length
                        ? question.subInputs.map(item => {
                            return (
                                printForm(item, deleteQuestion, question.questionType)
                            )
                        })
                        : null
                }
            </div>
        </div>
    )
}

function printCondtionTypeField(type) {
    switch (type) {
        case "text":
        case "radio":
            return (
                <option value="eq">Equals</option>
            );
        case "number":
            return (
                <Fragment>
                    <option value="gt">Greather than</option>
                    <option value="lt">Less than</option>
                </Fragment>
            );
        default:
            return null;
    }
}

function printCondtionValueField(value, type) {
    switch (type) {
        case "text":
        case "number":
            return (
                <input type="text" className="form-control form-control-sm" value={value} />
            );
        case "radio":
            return (
                <select type="text" className="form-control form-control-sm" value={value} >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            );
        default:
            return null;
    }
}


export default FormContainer;