import Immutable from 'seamless-immutable';

import { endpoints } from 'config';


const types = {
    UPDATE_ORDER_FIELD: 'UPDATE_ORDER_FIELD',
};

const order = window.localStorage.getItem('order') ? JSON.parse(window.localStorage.getItem('order')) : {};

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
        const order = state.order.merge({cart: state.cart.present});
        fetch(endpoints.orders, {
            method: "POST",
            credentials: "same-origin",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(order),
        });
    }
}


export const actions = {
    updateOrderField,
    placeOrder,
};
