import { connect } from "react-redux";
import { getQuestions, deleteQuestion, addQuestion, updateQuestion, addSubInput } from "../../actions/actions";

import Create from './Create'

const mapStateToProps = (state) => ({
        questions: state.questionsReducer.questions
});

const mapDispatchToProps = (dispatch) => ({
    deleteQuestion: (id) => dispatch(deleteQuestion(id)),
    getQuestions: () => dispatch(getQuestions()),
    addQuestion: () => dispatch(addQuestion()),
    addSubInput: (id) => dispatch(addSubInput(id)),
    updateQuestion: (id, update) => dispatch(updateQuestion(id, update))
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);