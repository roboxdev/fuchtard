import Immutable from 'seamless-immutable';


const types = {
    EXPANDED_CART_ITEM_TOGGLE: 'EXPANDED_CART_ITEM_TOGGLE',
};

const order = window.localStorage.getItem('order') ? JSON.parse(window.localStorage.getItem('order')) : {};

const initialState = Immutable({
    expandedCartItem: 0,
});

export default function (state=initialState, action) {
    switch (action.type) {
        case types.EXPANDED_CART_ITEM_TOGGLE:
            return state.expandedCartItem === action.foodItemId
                ? Immutable.set(state, 'expandedCartItem', 0)
                : Immutable.set(state, 'expandedCartItem', action.foodItemId);
        default:
            return state;
    }
};


function expandedCartItemToggle(foodItemId) {
    return {
        type: types.EXPANDED_CART_ITEM_TOGGLE,
        foodItemId: foodItemId,
    }
}


export const actions = {
    expandedCartItemToggle,
};
