import React from 'react';
import App from 'components/App';
import { BrowserRouter as Router } from './browserHistory';

const BrowserApp = () => <Router>
    <App/>
</Router>;

export default BrowserApp;
