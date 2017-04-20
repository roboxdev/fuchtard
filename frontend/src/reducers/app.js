import { combineReducers } from 'redux-seamless-immutable';
import cart from 'reducers/cart';
import entities from 'reducers/entities';
import notifications from 'reducers/notifications';
import order from 'reducers/order';
import ui from 'reducers/ui';


const rootReducer = combineReducers({
    cart,
    entities,
    notifications,
    order,
    ui,
});

export default rootReducer;
