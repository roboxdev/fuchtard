import fetch from 'isomorphic-fetch';
import * as Cookies from 'js-cookie';

const csrftoken = Cookies.get('csrftoken');


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


export function plusButton(foodItemId) {
    return dispatch => {
        dispatch(cartItemIncrease(foodItemId))
    }
}

export function minusButton(foodItemId) {
    return dispatch => {
        dispatch(cartItemDecrease(foodItemId))
    }
}

export function updateOrderField(field, value, address = false) {
    const path = address ? ['order', 'address', field] : ['order', field];
    return {
        type: 'UPDATE_ORDER_FIELD',
        payload: {
            path: path,
            value: value,
        }
    }
}

export function placeOrder() {
    return (dispatch, getState) => {
        const state = getState();
        const modifiedCart = state.cart.update(cart => cart.map(k => k.update(val => val.quantity)));
        const order = state.order.merge({cart: modifiedCart});
        fetch('/api/orders/', {
            method: "POST",
            credentials: "same-origin",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            }),
            body: JSON.stringify(order),
        });
    }
}


export function fetchData() {
    return (dispatch, getState) => {
        fetch('/api/food_items/', {
            credentials: "same-origin",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            })
        }).then(
            response => response.json()
        ).then(
            json => dispatch({type: 'SET_FOOD_ITEMS', payload: json})
        )
        fetch('/api/food_categories/', {
            credentials: "same-origin",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            })
        }).then(
            response => response.json()
        ).then(
            json => dispatch({type: 'SET_FOOD_CATEGORIES', payload: json})
        )
    }
}