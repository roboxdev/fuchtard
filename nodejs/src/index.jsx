import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {store} from 'store/store';
import {App, Routs} from 'components/app';
import {fetchData} from 'actions/app';


render(<Provider store={store}><Routs /></Provider>, document.getElementById('js-react-app'));
store.dispatch(fetchData());