import Immutable from 'seamless-immutable';


const types = {
    NOTIFY: 'NOTIFY',
    RESET_NOTIFICATION: 'RESET_NOTIFICATION',
};

const initialState = Immutable({
    label: '',
});

export default function (state=initialState, action) {
    switch (action.type) {
        case types.NOTIFY:
            return Immutable.set(state, 'label', action.label);
        case types.RESET_NOTIFICATION:
            return Immutable.set(state, 'label', '');
        default:
            return state;
    }
};


function notify(label) {
    return {type: types.NOTIFY, label: label}
}

function resetNotification() {
    return dispatch => {
        // small hack to prevent text disappearing before snackbar slided down
        setTimeout(
            () => dispatch({type: types.RESET_NOTIFICATION}),
            1000
        )
    }
}


export const actions = {
    notify,
    resetNotification,
};