import Immutable from 'seamless-immutable';
import { actions as notificationActions } from 'reducers/notifications';
import { foodItemAnnotatedCart } from 'selectors/app';


const types = {
    CLEAR_CART: 'CLEAR_CART',
    CART_ITEM_INCREASE: 'CART_ITEM_INCREASE',
    CART_ITEM_DECREASE: 'CART_ITEM_DECREASE',
    REVERT_CART: 'REVERT_CART',
};

const initialState = Immutable({
    present: window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : {},
    previous: {},
});


const backedUpCartState = (state) => Immutable.set(state, 'previous', state.present);


export default function (state=initialState, action) {
    switch (action.type) {
        case types.CLEAR_CART:
            return Immutable.set(backedUpCartState(state), 'present', {});
        case types.CART_ITEM_INCREASE:
            return Immutable.updateIn(
                backedUpCartState(state),
                ['present', action.payload],
                v => v >= 1 ? v + 1 : 1
            );
        case types.CART_ITEM_DECREASE:
            const quantity = state.present[action.payload];
            return quantity > 1
            ? Immutable.updateIn(backedUpCartState(state), ['present', action.payload], v => v - 1)
            : Immutable.update(backedUpCartState(state), 'present', v => Immutable.without(v, action.payload));
        case types.REVERT_CART:
            return Immutable.set(state, 'present', state.previous);
        default:
            return state;
    }
};

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


function clearCart() {
    return dispatch => {
        dispatch(notificationActions.notify('Корзина очищена'));
        dispatch({type: types.CLEAR_CART});
    }
}


function plusButton(foodItemId) {
    return dispatch => {
        dispatch(cartItemIncrease(foodItemId))
    }
}

function minusButton(foodItemId) {
    return (dispatch, getState) => {
        const state = getState();
        const {quantity, foodItem: {title}} = foodItemAnnotatedCart(state)[foodItemId];
        if (quantity === 1) {
            dispatch(notificationActions.notify(`Блюдо ${title} удалено из корзины`));
        }
        dispatch(cartItemDecrease(foodItemId));
    }
}

function revertCart() {
    return {type: types.REVERT_CART}
}


export const actions = {
    cartItemIncrease,
    cartItemDecrease,
    clearCart,
    plusButton,
    minusButton,
    revertCart,
};