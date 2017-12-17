import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducer from 'core/reducers';

import {actions} from 'core/reducers/entities';
import {actions as categoriesActions} from 'core/reducers/categories';
import {actions as productsActions} from 'core/reducers/products';


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
    window.localStorage.setItem('orderHistory', JSON.stringify(state.orderHistory.orders));
};

store.subscribe(placeCartIntoLocalStorage);

store.dispatch(actions.fetchGifts());
store.dispatch(categoriesActions.list());
store.dispatch(productsActions.list());

window.store = store;