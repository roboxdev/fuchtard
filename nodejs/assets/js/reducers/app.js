import {fromJS} from 'immutable';


function getInitialState() {
    const initialData = fromJS(window.initialData);
    return initialData.merge({
        cart: {},
        cartPrice: 0,
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
    });
}


export default function (state = getInitialState(), action) {
    switch (action.type) {
        case 'CART_ITEM_ADD':
            return state.setIn(['cart', action.payload.foodItemId], fromJS({
                quantity: 1,
                foodItem: action.payload.foodItem,
            }));
        case 'CART_ITEM_INCREASE':
            return state.updateIn(['cart', action.payload, 'quantity'], q => q + 1);
        case 'CART_ITEM_DECREASE':
            return state.updateIn(['cart', action.payload, 'quantity'], q => q - 1);
        case 'CART_ITEM_REMOVE':
            return state.deleteIn(['cart', action.payload]);
        case 'CART_PRICE_UPDATE':
            return state.update('cartPrice', val => val + action.payload);
        case 'UPDATE_ORDER_FIELD':
            return state.setIn(action.payload.path, action.payload.value);
        default:
            return state;
    }
}
