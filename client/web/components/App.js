import React from 'react';
import {Provider} from 'react-redux';
import {store} from 'core/store';

import Page from './Page';
import NavBar from './NavBar';
import Notification from './Notification';

import 'styles/_globals.css';


export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Page />
                    <NavBar />
                    <Notification />
                </div>
            </Provider>
        );
    }
}

export default App