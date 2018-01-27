import { connect } from "react-redux";
import { deleteQuestion, updateQuestion, addSubInput } from "../../../actions/actions";

import QuestionForm from './QuestionForm';

const mapStateToProps = (state) => ({
    questions: state.questionsReducer.questions
});


const mapDispatchToProps = (dispatch) => ({
    addSubInput: (id) => dispatch(addSubInput(id)),
    updateQuestion: (id, update) => dispatch(updateQuestion(id, update)),
    deleteQuestion: (id) => dispatch(deleteQuestion(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
