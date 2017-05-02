import React from 'react';
import {Provider} from 'react-redux';
import {store} from 'store';

import Page from 'components/Page';
import NavBar from 'components/NavBar';
import Notification from 'components/Notification';

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