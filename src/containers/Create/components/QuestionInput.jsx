import React from 'react';

const QuestionInput = (props) => (
    <div className="form-group row mx-0" data-name="question">
        <label className="col-form-label col-form-label-sm col-sm-2 ">Question</label>
        <div className="col-sm-10">
            <input
                type="text"
                name="questionValue"
                className="form-control form-control-sm"
                value={props.question.questionValue}
                placeholder="Please enter a question!"
                onChange={(e) => props.onChangeHandler(e)}
                required
            />
        </div>
    </div>
);

export default QuestionInput;