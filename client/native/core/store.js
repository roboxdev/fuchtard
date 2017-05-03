import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers/app';

import {actions} from './reducers/entities';


export const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
    )
);


store.dispatch(actions.fetchData());
