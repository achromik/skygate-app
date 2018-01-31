import { connect } from "react-redux";
import Navigation from "./Navigation";

import { resetAnswers } from "../../actions/actions";

const mapDispatchToProps = (dispatch) => {
    return {
        resetAnswers: () => dispatch(resetAnswers())
    };
};

export default connect(null, mapDispatchToProps)(Navigation);