import { combineReducers } from 'redux-seamless-immutable';
import cart from 'reducers/cart';
import entities from 'reducers/entities';
import notifications from 'reducers/notifications';
import order from 'reducers/order';
import orderHistory from 'reducers/orderHistory';
import ui from 'reducers/ui';


const rootReducer = combineReducers({
    cart,
    entities,
    notifications,
    order,
    orderHistory,
    ui,
});

export default rootReducer;
