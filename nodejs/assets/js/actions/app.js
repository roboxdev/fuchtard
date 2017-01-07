import fetch from 'isomorphic-fetch';
// import * as Cookies from 'js-cookie';

// const csrftoken = Cookies.get('csrftoken');


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

function cartItemAdd(foodItemId, foodItem) {
    return {
        type: 'CART_ITEM_ADD',
        payload: {
            foodItemId: foodItemId,
            foodItem: foodItem,
        },
    }
}

function cartItemRemove(foodItemId) {
    return {
        type: 'CART_ITEM_REMOVE',
        payload: foodItemId,
    }
}

export function plusButton(foodItem, quantity=0) {
    const foodItemId = foodItem.get('id');
    return dispatch => {
        if (quantity == 0) {
            dispatch(cartItemAdd(foodItemId, foodItem))
        } else if (quantity > 0 && quantity <= 11) {
            dispatch(cartItemIncrease(foodItemId))
        }
    }
}

export function minusButton(foodItem, quantity=0) {
    const foodItemId = foodItem.get('id');
    return dispatch => {
        if (quantity == 1) {
            dispatch(cartItemRemove(foodItemId))
        } else if (quantity > 1) {
            dispatch(cartItemDecrease(foodItemId))
        }
    }
}