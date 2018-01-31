import React from 'react';
import ConditionTypeInput from './ConditionTypeInput';
import ConditionValueInput from './ConditionValueInput';

const ConditionInputComponent = (props) => (
    <div className="form-group row mx-0" data-name="condition" >
        <label className="col-form-label col-form-label-sm col-sm-2" >Condition</label>
        <div className="col-sm-5">
            <ConditionTypeInput
                question={props.question}
                type={props.parentQuestionType}
                onChangeHandler={props.onChangeHandler}
            />

        </div>
        <div className="col-sm-5">
            <ConditionValueInput
                question={props.question}
                type={props.parentQuestionType}
                onChangeHandler={props.onChangeHandler}
            />
        </div>
    </div>
);

export default ConditionInputComponent;