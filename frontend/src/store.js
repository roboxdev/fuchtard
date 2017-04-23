import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducer from 'reducers/app';
import { cartSelector } from 'selectors/app';

import {actions} from 'reducers/entities';


export const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

const placeCartIntoLocalStorage = () => {
    const state = store.getState();
    window.localStorage.setItem('cart', JSON.stringify(state.cart.present));
    window.localStorage.setItem('order', JSON.stringify(state.order));
};

store.subscribe(placeCartIntoLocalStorage);

store.dispatch(actions.fetchData());

window.store = store;