import createHistory from 'history/createBrowserHistory'
import { Router } from 'react-router-dom';
import React from 'react';

export const BrowserRouter = props => <Router history={history} {...props}/>;

const history = createHistory();

window.browserHistory = history;

export default history;