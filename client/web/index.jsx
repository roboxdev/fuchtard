import React from 'react';
import { render } from 'react-dom';
import {actions} from 'core/reducers/entities';
import {store} from 'core/store';

import { BrowserRouter as Router } from 'browserHistory';

import App from 'components/App';


const BrowserApp = () => <Router>
    <App/>
</Router>;


store.dispatch(actions.fetchData()).then(() => {
  render(<BrowserApp/>, document.getElementById('js-react-app'));
});

