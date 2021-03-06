import React from 'react';
// import FormContainer from './Form.container';

import FormContainer from './QuestionForm/QuestionForm.container';

const Fragment = React.Fragment;

const Create = ({ questions, updateQuestion, deleteQuestion, addSubInput, addQuestion }) =>
    <Fragment>
        {questions.map(item => {
            return (
                <FormContainer
                    level={0}
                    key={item.id}
                    question={item}
                />
            );
        })}
        <button
            key={"add-button"}
            className="btn btn-success m-2"
            onClick={() => addQuestion()}
        >
            Add Input
            </button>
    </Fragment>;

export default Create;
