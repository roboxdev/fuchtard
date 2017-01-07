import {fromJS} from 'immutable';


function getInitialState() {
    const initialData = window.initialData;
    return fromJS(initialData)
}


export default function (state = getInitialState(), action) {
    switch (action.type) {
        case 'TEST':
            return state;
        default:
            return state;
    }
}
