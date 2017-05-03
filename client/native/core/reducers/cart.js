import Immutable from 'seamless-immutable';
import { actions as notificationActions } from './notifications';
import { actions as uiActions } from './ui';
import { foodItemAnnotatedCartSelector, cartSelector } from '../selectors/app';


const types = {
    CLEAR_CART: 'CLEAR_CART',
    CART_ITEM_ADD: 'CART_ITEM_ADD',
    CART_ITEM_INCREASE: 'CART_ITEM_INCREASE',
    CART_ITEM_DECREASE: 'CART_ITEM_DECREASE',
    CART_ITEM_REMOVE: 'CART_ITEM_REMOVE',
    REVERT_CART: 'REVERT_CART',
};

const defaultPresentCart = {
    foodItems: {},
    ordering: [],
};


function getCartFromLocalStorage() {
    // const cart = window.localStorage.getItem('cart');
    // try {
    //     const parsed = JSON.parse(cart);
    //     if (parsed && parsed === Object(parsed) && Object.keys(parsed).length !== 0) {
    //         return parsed;
    //     }
    // }
    // catch (e) {
    //     console.log(e)
    // }
    return defaultPresentCart
}

const initialState = Immutable({
    present: getCartFromLocalStorage(),
    previous: {},
});


const backedUpCartState = (state) => Immutable.set(state, 'previous', state.present);


export default function (state=initialState, action) {
    switch (action.type) {
        case types.CLEAR_CART:
            return Immutable.set(backedUpCartState(state), 'present', defaultPresentCart);
        case types.CART_ITEM_ADD:
            const addedToOrdering = Immutable.updateIn(
                backedUpCartState(state), ['present', 'ordering'], v => [...v, action.payload]
            );
            return Immutable.setIn(addedToOrdering, ['present', 'foodItems', action.payload], 1);
        case types.CART_ITEM_INCREASE:
            return Immutable.updateIn(backedUpCartState(state), ['present', 'foodItems', action.payload], v => v + 1);
        case types.CART_ITEM_DECREASE:
            return Immutable.updateIn(backedUpCartState(state), ['present', 'foodItems', action.payload], v => v - 1);
        case types.CART_ITEM_REMOVE:
            const removedFromOrdering = Immutable.updateIn(
                backedUpCartState(state),
                ['present', 'ordering'],
                ordering => ordering.filter(v => v !== action.payload)
            );
            return Immutable.updateIn(removedFromOrdering, ['present', 'foodItems'], v => Immutable.without(v, action.payload));
        case types.REVERT_CART:
            return Immutable.set(state, 'present', state.previous);
        default:
            return state;
    }
};

function cartItemAdd(foodItemId) {
    return {
        type: types.CART_ITEM_ADD,
        payload: foodItemId,
    }
}

function cartItemIncrease(foodItemId) {
    return {
        type: types.CART_ITEM_INCREASE,
        payload: foodItemId,
    }
}

function cartItemDecrease(foodItemId) {
    return {
        type: types.CART_ITEM_DECREASE,
        payload: foodItemId,
    }
}

export function cartItemRemove(foodItemId) {
    return {
        type: types.CART_ITEM_REMOVE,
        payload: foodItemId,
    }
}


function clearCart() {
    return dispatch => {
        dispatch(notificationActions.notify('Корзина очищена'));
        dispatch({type: types.CLEAR_CART});
    }
}


function plusButton(foodItemId) {
    return (dispatch, getState) => {
        const state = getState();
        const quantity = cartSelector(state)[foodItemId];
        if (quantity >= 1) {
            dispatch(cartItemIncrease(foodItemId));
        } else {
            dispatch(cartItemAdd(foodItemId));
            dispatch(uiActions.expandedCartItemSet(foodItemId));
        }
    }
}

function minusButton(foodItemId, suggestRevert = true) {
    return (dispatch, getState) => {
        const state = getState();
        const {quantity, foodItem: {title}} = foodItemAnnotatedCartSelector(state)[foodItemId];
        if (quantity === 1) {
            if (suggestRevert) {
                dispatch(notificationActions.notify(`Блюдо ${title} удалено из корзины`));
            }
            dispatch(cartItemRemove(foodItemId));
            dispatch(uiActions.expandedCartItemSet('total'));
        } else {
            dispatch(cartItemDecrease(foodItemId));
        }
    }
}

function revertCart() {
    return {type: types.REVERT_CART}
}


export const actions = {
    clearCart,
    plusButton,
    minusButton,
    revertCart,
};