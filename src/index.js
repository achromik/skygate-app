import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';
import './index.css';

import DevTools from './DevTools';

render(
    <Provider store={store}>
        <div>
            <Router history={browserHistory} routes={routes} />
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);