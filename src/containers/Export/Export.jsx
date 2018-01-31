import React from 'react';
import './Export.css';

const Fragment = React.Fragment;

const Export = ({ isPretyExport, questions, togglePrettyExport }) => {
    return (
        <Fragment>
            <textarea
                className="export_textarea"
                value={JSON.stringify(questions, null, isPretyExport ? "  " : null)}
                readOnly
            />
            <button
                type="button"
                className="d-block btn mx-auto btn-success"
                onClick={() => togglePrettyExport() }
            >
                {isPretyExport ? "Uglify" : "Pretty"}
            </button>
        </Fragment>
    );
};

export default Export;