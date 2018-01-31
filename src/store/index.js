import { createStore } from "redux";
import reducers from "../reducers/index";

import DevTools from '../DevTools';
import { throttle } from "lodash";
import { saveState } from '../util/localStorage';
// import { composeWithDevTools } from 'remote-redux-devtools';

// let composeEnhancers = composeWithDevTools({
//     realtime: true,
//     name: 'SkyGate App',
//     host: '127.0.0.1',
//     port: 8000, // the port your remotedev server is running at
// });

const store = createStore(
    reducers
    , DevTools.instrument()
    // , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // , composeEnhancers()
);

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000));

export default store;