import React from 'react';

// import QuestionForm from '../Create/QuestionForm/QuestionForm';

import QuestionItem from './QuestionItem/QuestionItem.container';

const Fragment = React.Fragment;

const Preview = ({ questions, resetAnswers }) => {
    resetAnswers()
    return (
        <div className="my-3">
            {
                questions.map((element) => {
                    return (
                        <Fragment key={element.id}>
                            <QuestionItem question={element} />
                        </Fragment>
                    )
                })
            }
        </div>
    )
}

export default Preview;