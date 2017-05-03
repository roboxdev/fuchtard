import Immutable from 'seamless-immutable';


import { endpoints } from '../config';

const types = {
    ADD_HISTORY_ENTRY: 'ADD_HISTORY_ENTRY',
};

function getOrdersHistoryFromLocalStorage() {
    // const orders = window.localStorage.getItem('orderHistory');
    // try {
    //     const parsed = JSON.parse(orders);
    //     if (parsed instanceof Array) {
    //         return parsed;
    //     }
    // }
    // catch (e) {
    //     console.log(e)
    // }
    return []
}

const initialState = Immutable({
    orders: getOrdersHistoryFromLocalStorage(),
});

export default function (state = initialState, action) {
    switch (action.type) {
        case types.ADD_HISTORY_ENTRY:
            return Immutable.update(state, 'orders',
                order => [
                    ...order.filter(v => v.id !== action.payload.id),
                    action.payload,
                ]
            );
        default:
            return state;
    }
};


function addHistoryEntry(json) {
    return {
        type: types.ADD_HISTORY_ENTRY,
        payload: json,
    }
}


function fetchOrderByHashid(hashid) {
    return dispatch => {
        fetch(`${endpoints.orders}${hashid}`).then(
            response => response.json()
        ).then(
            json => {
                if (json.id) {
                    dispatch(addHistoryEntry(json));
                } else {
                    console.log(json)
                }
            }
        );
    }
}


export const actions = {
    addHistoryEntry,
    fetchOrderByHashid,
};
