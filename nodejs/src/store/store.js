import {createStore, applyMiddleware, compose} from 'redux';
// import { combineReducers } from 'redux-seamless-immutable';
import thunk from 'redux-thunk';
import reducer from 'reducers/app';


export const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

window.store = store;