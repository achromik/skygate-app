import { connect } from "react-redux";
import { deleteQuestion, addQuestion, updateQuestion, addSubInput } from "../../actions/actions";

import Create from './Create';

const mapStateToProps = (state) => ({
        questions: state.questionsReducer.questions
});

const mapDispatchToProps = (dispatch) => ({
    deleteQuestion: (id) => dispatch(deleteQuestion(id)),
    addQuestion: () => dispatch(addQuestion()),
    addSubInput: (id) => dispatch(addSubInput(id)),
    updateQuestion: (id, update) => dispatch(updateQuestion(id, update))
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);