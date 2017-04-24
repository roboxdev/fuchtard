import Immutable from 'seamless-immutable';


const types = {
    ADD_HISTORY_ENTRY: 'ADD_HISTORY_ENTRY',
};

const orders = window.localStorage.getItem('orders') ? JSON.parse(window.localStorage.getItem('orders')) : [];

const initialState = Immutable({
    orders: orders,
});

export default function (state=initialState, action) {
    switch (action.type) {
        case types.ADD_HISTORY_ENTRY:
            return Immutable.update(state, 'orders',
                v => [...v, [action.payload.id, action.payload.order_created_timestamp]]
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


export const actions = {
    addHistoryEntry,
};
