import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';
import './styles/bootstrap-sandstone.css';
import './index.css';

import DevTools from './DevTools';

render(
    <Provider store={store}>
        <div>
            <Router history={hashHistory} routes={routes} />
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);