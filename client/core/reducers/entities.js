import Immutable from 'seamless-immutable';

import { endpoints } from 'core/config';


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
        fetch(endpoints.foodItems).then(
            response => response.json()
        ).then(
            json => dispatch({type: types.SET_FOOD_ITEMS, payload: json})
        );
        fetch(endpoints.foodCategories).then(
            response => response.json()
        ).then(
            json => dispatch({type: types.SET_FOOD_CATEGORIES, payload: json})
        );
        fetch(endpoints.gifts).then(
            response => response.json()
        ).then(
            json => dispatch({type: types.SET_GIFTS, payload: json})
        );
    }
}


export const actions = {
    fetchData,
};