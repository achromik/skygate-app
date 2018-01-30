import React from 'react';

const ConditionValueInput = (props) => {
    switch (props.type) {
        case "text":
        case "number":
            return (
                <input
                    type={props.type}
                    name="conditionValue"
                    className="form-control form-control-sm"
                    value={props.question.conditionValue}
                    placeholder="Enter a value!"
                    onChange={(e) => props.onChangeHandler(e)}
                    required
                />
            );
        case "radio":
            return (
                <select
                    type="text"
                    name="conditionValue"
                    className="form-control form-control-sm"
                    value={props.question.conditionValue}
                    onChange={(e) => props.onChangeHandler(e)}
                    required
                >
                    <option value="" disabled>Select a value...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            );
        default:
            return null;
    }
};

export default ConditionValueInput;
