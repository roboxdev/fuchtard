import {fromJS} from 'immutable';


function getInitialState() {
    const initialData = fromJS(window.initialData);
    return initialData.merge({
       cart: []
    });
}


export default function (state = getInitialState(), action) {
    switch (action.type) {
        case 'CART_ITEM_INCREASE':
            return state.updateIn(
                ['cart', state.get('cart').findIndex(val => val.get('id') === action.payload), 'quantity'],
                q => q + 1
            );
        case 'CART_ITEM_DECREASE':
            return state.updateIn(
                ['cart', state.get('cart').findIndex(val => val.get('id') === action.payload), 'quantity'],
                q => q - 1
            );
        case 'CART_ITEM_ADD':
            return state.update('cart', val => val.push(fromJS({
                id: action.payload.foodItemId,
                quantity: 1,
                foodItem: action.payload.foodItem,
            })));
        case 'CART_ITEM_REMOVE':
            return state.update('cart', val => val.filterNot(x => x.get('id') === action.payload));
        default:
            return state;
    }
}
