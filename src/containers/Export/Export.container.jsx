import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from "../../actions/actions";
import './Export.css'

const Fragment = React.Fragment;

class ExportContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pretty: false
        }
    }

    componentDidMount() {
        this.props.dispatch(getQuestions());
    }

    render() {
        return (
            <Fragment>
                <textarea className="export_textarea" defaultValue={JSON.stringify(this.props.questions, null, this.state.pretty ? "\t" : null)} />
                <button type="button" className="d-block btn mx-auto btn-success" onClick={() => { this.setState({ pretty: !this.state.pretty }) }}>{this.state.pretty ? "Uglify" : "Pretty"}</button>
            </Fragment>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        questions: store.questionsReducer.questions
    };
};

export default connect(mapStateToProps)(ExportContainer);