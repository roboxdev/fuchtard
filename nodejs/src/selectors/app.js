import {createSelector} from 'reselect';
import sumBy from 'lodash/sumBy';
import find from 'lodash/find';
import mapValues from 'lodash/mapValues';
import values from 'lodash/values';

export const getQuantityByFoodId = (state, props) => state.cart[props.foodItemId];
export const getCategoryBySlug = (state, props) => (
    state.foodCategories.find(cat => cat.slug === props.match.params.slug)
);

export const getFoodItemsOfCategory = (state, props) => {
    const category = getCategoryBySlug(state, props);
    return category ? state.foodItems.filter(v => v.category === category.url) : []
};

const foodItemsSelector = state => state.foodItems;
const giftsSelector = state => state.gifts;
const cartSelector = state => state.cart;
const getFoodItemById = (foodItems, id) => find(foodItems, v => v.id == id);

export const foodItemAnnotatedCart = createSelector(
    cartSelector,
    foodItemsSelector,
    (cart, foodItems) => mapValues(
        cart,
        (quantity, foodItemId) => ({
            quantity,
            foodItem: getFoodItemById(foodItems, foodItemId),
        })
    )
);

export const subtotalSelector = createSelector(
    foodItemAnnotatedCart,
    (cart) => sumBy(values(cart),
        ({quantity, foodItem}) => foodItem && foodItem.price * quantity)
);


export const foodItemAnnotatedGifts = createSelector(
    giftsSelector,
    foodItemsSelector,
    (gifts, foodItems) => gifts.map(
        ({food_item, ...rest}) => ({
            foodItem: getFoodItemById(foodItems, food_item),
            ...rest,
        }))
);
