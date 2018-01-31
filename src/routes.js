import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './containers/Navigation/Navigation.container';
import Home from './presentional/Home';
import Preview from './containers/Preview/Preview.container';
import Export from "./containers/Export/Export.container";
import Create from "./containers/Create/Create.container";
import NotFound from './presentional/NotFound';

export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home} />
        <Route path="create" component={Create} />
        <Route path="preview" component={Preview} />
        <Route path="export" component={Export} />
        <Route path="*" component={NotFound} />
    </Route>
);