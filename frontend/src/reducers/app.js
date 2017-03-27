import Immutable from 'seamless-immutable';


function getInitialState() {
    const cart = window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : {};
    const order = window.localStorage.getItem('order') ? JSON.parse(window.localStorage.getItem('order')) : {};
    return Immutable({
        foodItems: [],
        foodCategories: [],
        cart: cart,
        prevCart: {},
        order: {
            name: order.name || '',
            email: order.email || '',
            phone: '',
            street: order.street || '',
            apartment: order.apartment || '',
            building: order.building || '',
            floor: order.floor || '',
            comment: '',
            gift: null,
        },
        gifts: [],
    });
}

const backedUpCartState = (state) => Immutable.set(state, 'prevCart', state.cart);


export default function (state = getInitialState(), action) {
    switch (action.type) {
        case 'CLEAR_CART':
            return Immutable.set(backedUpCartState(state), 'cart', {});
        case 'CART_ITEM_INCREASE':
            return Immutable.updateIn(
                backedUpCartState(state),
                ['cart', action.payload],
                v => v >= 1 ? v + 1 : 1
            );
        case 'CART_ITEM_DECREASE':
            const quantity = state.cart[action.payload];
            return quantity > 1
            ? Immutable.updateIn(backedUpCartState(state), ['cart', action.payload], v => v - 1)
            : Immutable.update(backedUpCartState(state), 'cart', v => Immutable.without(v, action.payload));
        case 'REVERT_CART':
            return Immutable.set(state, 'cart', state.prevCart);
        case 'UPDATE_ORDER_FIELD':
            return Immutable.setIn(state, ['order', action.field], action.value);
        case 'SET_FOOD_CATEGORIES':
            return Immutable.set(state, 'foodCategories', action.payload);
        case 'SET_FOOD_ITEMS':
            return Immutable.set(state, 'foodItems', action.payload);
        case 'SET_GIFTS':
            return Immutable.set(state, 'gifts', action.payload);
        default:
            return state;
    }
}
