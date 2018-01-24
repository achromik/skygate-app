import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentional/navigation.component';
import Home from './presentional/home.component';
import Create from './presentional/create.component';
import Preview from './presentional/preview.component';
// import Export from './presentional/export.component';
import ExportContainer from "./containers/Export/Export.container";
import NotFound from './presentional/notfound.component';

export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home} />
        <Route path="create" component={Create} />
        <Route path="preview" component={Preview} />
        <Route path="export" component={ExportContainer} />
        <Route path="*" component={NotFound} />
    </Route>
);