import Immutable from 'seamless-immutable';
import { createSelector } from 'reselect';

import endpoints from 'core/endpoints';

import { resourceReducer } from 'redux-resource';
import { crudRequest } from 'redux-resource-xhr';

import {getSlugKeyedObj} from 'core/helpers';
import history from 'browserHistory';


const MODEL_NAME = 'categories';
const endpoint = endpoints.categories;

const reduxResourceReducer = resourceReducer(
  MODEL_NAME, {
    initialState: {

    },
  }
);

const initialState = Immutable(reduxResourceReducer(undefined, {}));

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return reduxResourceReducer(state, action);
  }
};

const create = (data) => (dispatch, getState) => (
  crudRequest('create', {
    dispatch,
    actionDefaults: {
      resourceName: MODEL_NAME,
      request: 'create',
    },
    xhrOptions: {
      url: endpoint,
      method: 'POST',
      headers: {
          'Authorization': `Token ${getState().auth.authToken}`,
      },
      json: {
        ...data,
      }
    },
    transformData: data => [data],
    onSucceeded: (action, res, body) => {
      dispatch(action);
      history.push(`/${body.slug}/`);
    },
  })
);

const update = (id, data) => (dispatch, getState) => (
  crudRequest('update', {
    dispatch,
    actionDefaults: {
      resourceName: MODEL_NAME,
      resources: [id]
    },
    xhrOptions: {
      url: `${endpoint}${id}/`,
      method: 'PUT',
      headers: {
        'Authorization': `Token ${getState().auth.authToken}`,
      },
      json: {
        ...data
      }
    },
    transformData: data => [data],
    onSucceeded: (action, res, body) => {
      dispatch(action);
      history.push(`/${body.slug}/`);
    },
  })
);

const destroy = (id) => (dispatch, getState) => (
  crudRequest('delete', {
    dispatch,
    actionDefaults: {
      resourceName: MODEL_NAME,
      resources: [id],
    },
    xhrOptions: {
      url: `${endpoint}${id}/`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${getState().auth.authToken}`,
      },
      json: true
    },
    onSucceeded: (action, res, body) => {
      dispatch(action);
      history.push(`/`);
    }
  })
);


const list = () => dispatch => (
  crudRequest('read', {
    dispatch,
    actionDefaults: {
      resourceName: MODEL_NAME,
      request: 'list',
    },
    xhrOptions: {
      url: endpoint,
      json: true
    },
  })
);


export const actions = {
    list,
    create,
    update,
    destroy,
};

const categoriesSelector = state => state.categories.resources;

export const slugKeyedCategoriesSelector = createSelector(
  [
    categoriesSelector,
    (state, props) => props.categorySlug,
  ],
  (categories, categorySlug) => getSlugKeyedObj(categories)[categorySlug],
);

export const getCategoryBySlug = (state, props) => (
    Object.values(state.categories.resources).find(cat => cat.slug === props.match.params.slug)
);


export const visibleCategoriesSelector = createSelector(
    categoriesSelector,
    categories => Object.values(categories).filter(v => v && v.visible)
);

const getFirstFoodItemOfCategory = (category, foodItems) => Object.values(foodItems).find(v => v.category === category.url);

const getFoodCategoryAvatar = (category, foodItems) => {
    const foodItem = getFirstFoodItemOfCategory(category, foodItems);
    return foodItem ? foodItem.photo : '';
};

const foodItemsSelector = state => state.products.resources;

export const visibleCategoriesWithAvatarSelector = createSelector(
    visibleCategoriesSelector,
    foodItemsSelector,
    (categories, foodItems) => categories.map(
        category => ({
                ...category,
                avatar: getFoodCategoryAvatar(category, foodItems),
            }
        ))
);

