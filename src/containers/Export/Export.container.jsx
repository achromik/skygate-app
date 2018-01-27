import { connect } from 'react-redux';
import { togglePrettyExport } from "../../actions/actions";
import Export from './Export';

const mapStateToProps = (store) => {
    return {
        questions: store.questionsReducer.questions,
        isPretyExport: store.questionsReducer.isPretyExport
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        togglePrettyExport: () => dispatch(togglePrettyExport())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Export);