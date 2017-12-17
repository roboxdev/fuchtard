import { combineReducers } from 'redux-seamless-immutable';
import auth from './auth';
import cart from './cart';
import categories from './categories';
import gifts from './gifts';
import notifications from './notifications';
import order from './order';
import orderHistory from './orderHistory';
import products from './products';
import ui from './ui';


const rootReducer = combineReducers({
  auth,
  cart,
  categories,
  gifts,
  notifications,
  order,
  orderHistory,
  products,
  ui,
});

export default rootReducer;
