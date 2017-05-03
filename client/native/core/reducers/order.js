import Immutable from 'seamless-immutable';

import { actions as cartActions } from './cart';

import { endpoints } from '../config';

import { cartAsOrderedMap } from '../selectors/app';


const types = {
    UPDATE_ORDER_FIELD: 'UPDATE_ORDER_FIELD',
};

const order = {};

const initialState = Immutable({
    gift: null,
    name: order.name || '',
    email: order.email || '',
    phone: '',
    street: order.street || '',
    apartment: order.apartment || '',
    building: order.building || '',
    floor: order.floor || '',
    comment: '',
});

export default function (state=initialState, action) {
    switch (action.type) {
        case types.UPDATE_ORDER_FIELD:
            return Immutable.set(state, action.field, action.value);
        default:
            return state;
    }
};


function updateOrderField(field, value) {
    return {
        type: types.UPDATE_ORDER_FIELD,
        field: field,
        value: value,
    }
}

function placeOrder() {
    return (dispatch, getState) => {
        const state = getState();
        const cart = [...cartAsOrderedMap(state)];
        const order = {...state.order, cart};
        fetch(endpoints.checkout, {
            method: "POST",
            credentials: "same-origin",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(order),
        }).then(
            response => response.json()
        ).then(
            json => {
                if (json.id) {
                    dispatch(cartActions.clearCart());
                } else {
                    console.log(json)
                }
            }
        );
    }
}


export const actions = {
    updateOrderField,
    placeOrder,
};
