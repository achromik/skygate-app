import { connect } from "react-redux";
import QuestionItem from './QuestionItem';
import { updateAnswers } from "../../../actions/actions";

const mapStateToProps = (state) => {
    return {
        answers: state.questionsReducer.answers 
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateAnswers: (id, answer) => dispatch(updateAnswers(id, answer))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionItem);