import {createSelector} from 'reselect';
import sumBy from 'lodash/sumBy';
import find from 'lodash/find';
import mapValues from 'lodash/mapValues';
import values from 'lodash/values';

import { restaurantSettings } from 'config';

const {minimalOrderRequirement} = restaurantSettings;

export const getQuantityByFoodId = (state, props) => state.cart.present[props.foodItemId];
export const getCategoryBySlug = (state, props) => (
    state.entities.foodCategories.find(cat => cat.slug === props.match.params.slug)
);

export const getFoodItemsOfCategory = (state, props) => {
    const category = getCategoryBySlug(state, props);
    return category ? state.entities.foodItems.filter(v => v.category === category.url) : []
};

export const getFoodItemsBySlugOrID = (state, props) => {
    const foodItems = getFoodItemsOfCategory(state, props);
    return foodItems.find(food => food.slug === props.match.params.foodSlug || food.id === +props.match.params.foodSlug)
};

const foodItemsSelector = state => state.entities.foodItems;
const giftsSelector = state => state.entities.gifts;
const cartSelector = state => state.cart.present;
const getFoodItemById = (foodItems, id) => find(foodItems, v => v.id === +id);

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


export const minimalOrderRequirementSatisfiedSelector = createSelector(
    subtotalSelector,
    subtotal => minimalOrderRequirement < subtotal,
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
