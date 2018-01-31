import React from 'react';
import QuestionItem from './QuestionItem/QuestionItem.container';

const Fragment = React.Fragment;

const Preview = ({ questions, resetAnswers }) => {
    resetAnswerForm();
    return (
        <div className="my-3">
            <form id="answersForm">
                {
                    questions.map((element) => {
                        return (
                            <Fragment key={element.id}>
                                <QuestionItem question={element} />
                            </Fragment>
                        );
                    })
                }
            </form>
        </div>
    );
};


function resetAnswerForm() {
    if (document.getElementById('answersForm')) {
        document.getElementById('answersForm').reset();
    }
}

export default Preview;