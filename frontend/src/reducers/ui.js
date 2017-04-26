import Immutable from 'seamless-immutable';


const types = {
    EXPANDED_CART_ITEM_TOGGLE: 'EXPANDED_CART_ITEM_TOGGLE',
    EXPANDED_CART_ITEM_SET: 'EXPANDED_CART_ITEM_SET',
    SET_PAGE_TITLE: 'SET_PAGE_TITLE',
};

const order = window.localStorage.getItem('order') ? JSON.parse(window.localStorage.getItem('order')) : {};

const initialState = Immutable({
    expandedCartItem: 0,
    pageTitle: '',
});

export default function (state=initialState, action) {
    switch (action.type) {
        case types.EXPANDED_CART_ITEM_TOGGLE:
            return state.expandedCartItem === action.foodItemId
                ? Immutable.set(state, 'expandedCartItem', 0)
                : Immutable.set(state, 'expandedCartItem', action.foodItemId);
        case types.EXPANDED_CART_ITEM_SET:
            return Immutable.set(state, 'expandedCartItem', action.foodItemId);
        case types.SET_PAGE_TITLE:
            return Immutable.set(state, 'pageTitle', action.title);
        default:
            return state;
    }
};


function expandedCartItemToggle(foodItemId) {
    return {
        type: types.EXPANDED_CART_ITEM_TOGGLE,
        foodItemId,
    }
}

function expandedCartItemSet(foodItemId) {
    return {
        type: types.EXPANDED_CART_ITEM_SET,
        foodItemId,
    }

}

function setPageTitle(title = '') {
    return {
        type: types.SET_PAGE_TITLE,
        title,
    }
}


export const actions = {
    expandedCartItemToggle,
    expandedCartItemSet,
    setPageTitle,
};
