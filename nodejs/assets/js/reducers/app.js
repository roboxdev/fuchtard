import {fromJS} from 'immutable';


function getInitialState() {
    const initialData = fromJS(window.initialData);
    return initialData.merge({
       cart: []
    });
}


export default function (state = getInitialState(), action) {
    switch (action.type) {
        case 'TEST':
            return state;
        default:
            return state;
    }
}
