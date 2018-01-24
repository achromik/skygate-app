import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';

const Navigation = props => {
    return (
        <div>
            <nav>

                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link" to="/create">Create</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/preview">Preview</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/export">Export</Link>
                    </li>
                </ul>


            </nav>
            <div className="wrapper container-fluid">
                {props.children}
            </div>
        </div>
    );
};

export default Navigation;