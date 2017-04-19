import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Page from 'components/Page';
import NavBar from 'components/NavBar';
import Notification from 'components/Notification';


export class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Page />
                    <NavBar />
                    <Notification />
                </div>
            </Router>
        );
    }
}

export default App