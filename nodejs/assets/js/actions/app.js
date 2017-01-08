import fetch from 'isomorphic-fetch';
import * as Cookies from 'js-cookie';

const csrftoken = Cookies.get('csrftoken');

function cartItemAdd(foodItemId, foodItem) {
    return {
        type: 'CART_ITEM_ADD',
        payload: {
            foodItemId: foodItemId,
            foodItem: foodItem,
        },
    }
}

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


function cartItemRemove(foodItemId) {
    return {
        type: 'CART_ITEM_REMOVE',
        payload: foodItemId,
    }
}

function cartPriceUpdate(by) {
    return {
        type: 'CART_PRICE_UPDATE',
        payload: by
    }
}

export function plusButton(foodItem, quantity=0) {
    const foodItemId = foodItem.get('id');
    return dispatch => {
        if (quantity <= 10) {
            if (quantity == 0) {
                dispatch(cartItemAdd(foodItemId, foodItem))
            } else {
                dispatch(cartItemIncrease(foodItemId))
            }
            dispatch(cartPriceUpdate(+foodItem.get('price')))
        }
    }
}

export function minusButton(foodItem, quantity=0) {
    const foodItemId = foodItem.get('id');
    return dispatch => {
        if (quantity >= 1) {
            if (quantity == 1) {
                dispatch(cartItemRemove(foodItemId))
            } else {
                dispatch(cartItemDecrease(foodItemId))
            }
            dispatch(cartPriceUpdate(-foodItem.get('price')))
        }
    }
}

export function updateOrderField(field, value, address=false) {
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
        const modifiedCart = state.get('cart').update(cart => cart.map(k => k.update(val => val.get('quantity'))));
        const order = state.get('order').merge({cart: modifiedCart});
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