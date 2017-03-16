import {createSelector} from 'reselect';
import sumBy from 'lodash/sumBy';
import find from 'lodash/find';
import mapValues from 'lodash/mapValues';
import values from 'lodash/values';

export const getQuantityByFoodId = (state, props) => state.cart[props.foodItemId];

const foodItemsSelector = state => state.foodItems;
const cartSelector = state => state.cart;

export const foodItemAnnotatedCart = createSelector(
    cartSelector,
    foodItemsSelector,
    (cart, foodItems) => mapValues(
        cart,
        (quantity, foodItemId) => ({
            quantity,
            foodItem: find(foodItems, v => v.id == foodItemId),
        })
    )
);

export const subtotalSelector = createSelector(
    foodItemAnnotatedCart,
    (cart) => sumBy(values(cart),
        ({quantity, foodItem}) => foodItem && foodItem.price * quantity)
);

