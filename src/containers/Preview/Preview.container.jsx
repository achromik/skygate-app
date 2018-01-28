import { connect } from "react-redux";
import { resetAnswers } from "../../actions/actions";


import Preview from './Preview';

const mapStateToProps = (store) => {
    return {
        questions: store.questionsReducer.questions
    }
}

const mapDispatchToProps = (dispatch) => { 
    return {
        resetAnswers: () => dispatch(resetAnswers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview);