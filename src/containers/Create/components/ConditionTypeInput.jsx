import React from 'react';

const ConditionTypeInput = (props) => {
    switch (props.type) {
        case "text":
        case "radio":
            return (
                <select
                    type="text"
                    name="conditionType"
                    className="form-control form-control-sm"
                    value={props.question.conditionType}
                    onChange={(e) => props.onChangeHandler(e)}
                    required
                >
                    <option value="" disabled>Select a value...</option>
                    <option value="eq">Equals</option>
                </select>
            );
        case "number":
            return (
                <select
                    type="text"
                    name="conditionType"
                    className="form-control form-control-sm"
                    value={props.question.conditionType}
                    onChange={(e) => props.onChangeHandler(e)}
                    required
                >
                    <option value="" disabled>Select a value...</option>
                    <option value="eq">Equals</option>
                    <option value="gt">Greather than</option>
                    <option value="lt">Less than</option>
                </select>
            );
        default:
            return null;
    }
};

export default ConditionTypeInput;