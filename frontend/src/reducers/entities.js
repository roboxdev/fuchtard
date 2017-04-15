import Immutable from 'seamless-immutable';

import { foodItemsEndpoint, foodCategoriesEndpoint, giftsEndpoint } from 'config';


const types = {
    SET_FOOD_CATEGORIES: 'SET_FOOD_CATEGORIES',
    SET_FOOD_ITEMS: 'SET_FOOD_ITEMS',
    SET_GIFTS: 'SET_GIFTS',
};

const initialState = Immutable({
    foodItems: [],
    foodCategories: [],
    gifts: [],
});

export default function (state=initialState, action) {
    switch (action.type) {
        case types.SET_FOOD_CATEGORIES:
            return Immutable.set(state, 'foodCategories', action.payload);
        case types.SET_FOOD_ITEMS:
            return Immutable.set(state, 'foodItems', action.payload);
        case types.SET_GIFTS:
            return Immutable.set(state, 'gifts', action.payload);
        default:
            return state;
    }
};


function fetchData() {
    return (dispatch) => {
        fetch(foodItemsEndpoint).then(
            response => response.json()
        ).then(
            json => dispatch({type: types.SET_FOOD_ITEMS, payload: json})
        );
        fetch(foodCategoriesEndpoint).then(
            response => response.json()
        ).then(
            json => dispatch({type: types.SET_FOOD_CATEGORIES, payload: json})
        );
        fetch(giftsEndpoint).then(
            response => response.json()
        ).then(
            json => dispatch({type: types.SET_GIFTS, payload: json})
        );
    }
}


export const actions = {
    fetchData,
};