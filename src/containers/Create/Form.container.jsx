import React, { Component } from 'react';
import './FormContainer.css';

class FormContainer extends Component {
    render() {
        const question = this.props.question;
        return (printForm(question, this.props.deleteQuestion))
    }
}

function printForm(question, deleteQuestion) {
    return (
        <div key={question.id} className="questionForm">
            <form className="w-100 border p-3 my-2">
                {
                    //check if root question
                    question.conditionType
                        ? (
                            <div className="form-group row" data-name="condition">
                                <label className="col-form-label col-form-label-sm col-sm-3 ">Condition</label>
                                <div className="col-sm-5">
                                    <select type="text" className="form-control form-control-sm" >
                                        <option value="equals">Equals</option>
                                        <option value="gt">Greather than</option>
                                        <option value="lt">Less than</option>
                                    </select>
                                </div>
                                <div className="col-sm-4">
                                    <select type="text" className="form-control form-control-sm" >
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>
                        )
                        : null
                }
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

                                printForm(item, deleteQuestion)
                            )
                        })
                        : null
                }
            </div>
        </div>
    )
}

export default FormContainer;