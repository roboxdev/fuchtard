import Immutable from 'seamless-immutable';


function getInitialState() {
    return Immutable({
        foodItems: [],
        foodCategories: [],
        cart: {
            18: 3,
            93: 1,
            32: 2,
        },
        order: {
            name: '',
            email: '',
            phone: '',
            address: {
                street: '',
                apartment: '',
                building: '',
                floor: null,
            },
            comment: '',
            gift: null,
        },
        gifts: [],
    });
}


export default function (state = getInitialState(), action) {
    switch (action.type) {
        case 'CART_ITEM_INCREASE':
            return Immutable.updateIn(state, ['cart', action.payload], v => v >= 1 ? v + 1 : 1);
        case 'CART_ITEM_DECREASE':
            const quantity = state.cart[action.payload];
            return quantity > 1
            ? Immutable.updateIn(state, ['cart', action.payload], v => v - 1)
            : Immutable.update(state, 'cart', v => Immutable.without(v, action.payload));
        case 'UPDATE_ORDER_FIELD':
            return state.setIn(action.payload.path, action.payload.value);
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
