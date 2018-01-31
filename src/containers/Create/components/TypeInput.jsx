import React from 'react';

const TypeInput = (props) => (
    <div className="form-group row row mx-0" data-name="type">
        <label className="col-form-label col-form-label-sm col-sm-2 ">Type</label>
        <div className="col-sm-10">
            <select
                type="text"
                name="questionType"
                className="form-control form-control-sm"
                value={props.question.questionType}
                onChange={(e) => props.onChangeHandler(e)}
                required
            >
                <option value="" disabled>Select a value...</option>
                <option value="text">Text</option>
                <option value="radio">Yes/No</option>
                <option value="number">Number</option>
            </select>
        </div>
    </div>
);

export default TypeInput;