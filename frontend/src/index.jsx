import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import { BrowserRouter as Router } from 'browserHistory';

const BrowserApp = () => <Router>
    <App/>
</Router>;

render(<BrowserApp/>, document.getElementById('js-react-app'));
