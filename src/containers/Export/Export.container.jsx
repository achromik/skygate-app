import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from "../../actions/actions";

class ExportContainer extends Component{
    componentDidMount() {
        this.props.dispatch(getQuestions());
    }

    render () {
        console.log(JSON.stringify(this.props.questions));
        return (
            <div>
                <textarea value={JSON.stringify(this.props.questions, null, '\t')}/>
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        questions: store.questionsReducer.questions
    };
};

export default connect(mapStateToProps)(ExportContainer);