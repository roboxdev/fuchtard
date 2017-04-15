import {createStore, applyMiddleware, compose} from 'redux';
// import { combineReducers } from 'redux-seamless-immutable';
import thunk from 'redux-thunk';
import reducer from 'reducers/app';

import {fetchData} from 'actions/app';


export const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

const placeCartIntoLocalStorage = () => {
    const state = store.getState();
    window.localStorage.setItem('cart', JSON.stringify(state.cart));
    window.localStorage.setItem('order', JSON.stringify(state.order));
};

store.subscribe(placeCartIntoLocalStorage);

store.dispatch(fetchData());

window.store = store;