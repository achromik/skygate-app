import React, { Component } from 'react';
import { connect } from "react-redux";
import { getQuestions, deleteQuestion } from "../../actions/actions";
import FormContainer from './Form.container';

class CreateContainer extends Component {
    constructor(props) {
        super(props);
        this.deleteQuestion = this.deleteQuestion.bind(this);
    }
    
    componentDidMount() {
        this.props.dispatch(getQuestions());
    }

    deleteQuestion(id) {
        this.props.dispatch(deleteQuestion(id));
    }

    render() {
        return [
            this.props.questions.map(item => {
                return <FormContainer
                    key={item.id}
                    question={item}
                    deleteQuestion = {this.deleteQuestion}
                />
            }),
            <button key={"add-button"} className="btn btn-success">Add Input</button>
        ]
    }
}

const mapStateToProps = function (store) {
    return {
        questions: store.questionsReducer.questions
    };
};

export default connect(mapStateToProps)(CreateContainer);