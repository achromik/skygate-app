import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentional/navigation.component';
import Home from './presentional/home.component';
import Preview from './presentional/preview.component';
import Export from "./containers/Export/Export.container";
import Create from "./containers/Create/Create.container";
import NotFound from './presentional/notfound.component';

export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home} />
        <Route path="create" component={Create} />
        <Route path="preview" component={Preview} />
        <Route path="export" component={Export} />
        <Route path="*" component={NotFound} />
    </Route>
);