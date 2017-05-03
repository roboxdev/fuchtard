import { combineReducers } from 'redux-seamless-immutable';
import cart from './cart';
import entities from './entities';
import notifications from './notifications';
import order from './order';
import orderHistory from './orderHistory';
import ui from './ui';


const rootReducer = combineReducers({
    cart,
    entities,
    notifications,
    order,
    orderHistory,
    ui,
});

export default rootReducer;
