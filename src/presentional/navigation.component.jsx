import React from 'react';
import { Link } from 'react-router';
import '../data/bootstrap.css';

const Fragment = React.Fragment;

const Navigation = props => {
    return (
        <Fragment>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link key="1" className="nav-link" activeClassName="active" to="/create">Create</Link>
                    </li>
                    <li className="nav-item">
                        <Link key="2" className="nav-link" activeClassName="active" to="/preview">Preview</Link>
                    </li>
                    <li className="nav-item">
                        <Link key="3" className="nav-link" activeClassName="active" to="/export">Export</Link>
                    </li>
                </ul>
            </nav>
            <div className="wrapper container-fluid">
                {props.children}
            </div>
        </Fragment>
    );
};

export default Navigation;