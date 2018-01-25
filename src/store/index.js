import { createStore } from "redux";
import reducers from "../reducers/index";
import DevTools from '../DevTools';
import { throttle } from "lodash";

import { saveState } from '../util/localStorage';

const store = createStore(
    reducers
    , DevTools.instrument()
);

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000));

export default store;