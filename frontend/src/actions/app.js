import fetch from 'isomorphic-fetch';
import {ordersEndpoint, foodItemsEndpoint, foodCategoriesEndpoint, giftsEndpoint} from 'config';


function cartItemIncrease(foodItemId) {
    return {
        type: 'CART_ITEM_INCREASE',
        payload: foodItemId,
    }
}

function cartItemDecrease(foodItemId) {
    return {
        type: 'CART_ITEM_DECREASE',
        payload: foodItemId,
    }
}


export function clearCart() {
    return dispatch => {
        dispatch(notify('Корзина очищена'));
        dispatch({type: 'CLEAR_CART'});
    }
}


export function plusButton(foodItemId) {
    return dispatch => {
        dispatch(cartItemIncrease(foodItemId))
    }
}

export function minusButton(foodItemId, quantity, title) {
    return dispatch => {
        dispatch(cartItemDecrease(foodItemId));
        if (quantity === 1) {
            dispatch(notify(`Блюдо ${title} удалено из корзины`));
        }
    }
}

export function revertCart() {
    return {type: 'REVERT_CART'}
}

function notify(label) {
    return {type: 'NOTIFY', label: label}
}

export function resetNotification() {
    return dispatch => {
        // small hack to prevent text disappearing before snackbar slided down
        setTimeout(
            () => dispatch({type: 'RESET_NOTIFICATION'}),
            1000
        )
    }
}

export function updateOrderField(field, value) {
    return {
        type: 'UPDATE_ORDER_FIELD',
        field: field,
        value: value,
    }
}

export function placeOrder() {
    return (dispatch, getState) => {
        const state = getState();
        const order = state.order.merge({cart: state.cart});
        fetch(ordersEndpoint, {
            method: "POST",
            credentials: "same-origin",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(order),
        });
    }
}


export function fetchData() {
    return (dispatch) => {
        fetch(foodItemsEndpoint).then(
            response => response.json()
        ).then(
            json => dispatch({type: 'SET_FOOD_ITEMS', payload: json})
        );
        fetch(foodCategoriesEndpoint).then(
            response => response.json()
        ).then(
            json => dispatch({type: 'SET_FOOD_CATEGORIES', payload: json})
        );
        fetch(giftsEndpoint).then(
            response => response.json()
        ).then(
            json => dispatch({type: 'SET_GIFTS', payload: json})
        );
    }
}