import Immutable from 'seamless-immutable';
import { createSelector } from 'reselect';

import endpoints from 'core/endpoints';

import { resourceReducer } from 'redux-resource';
import { crudRequest } from 'redux-resource-xhr';
import {getSlugKeyedObj} from 'core/helpers';
import history from 'browserHistory';

const MODEL_NAME = 'products';
const endpoint = endpoints.foodItems;

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
      // TODO
      // history.push(`/${body.slug}/`);
    }
  })
);

const update = (id, url, data) => (dispatch, getState) => (
  crudRequest('update', {
    dispatch,
    actionDefaults: {
      resourceName: MODEL_NAME,
      resources: [id]
    },
    xhrOptions: {
      url,
      // method: 'PUT',
      method: 'PATCH',
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
      // TODO
      // history.push(`/${body.slug}/`);
    }
  })
);

const destroy = (id, url) => (dispatch, getState) => (
  crudRequest('delete', {
    dispatch,
    actionDefaults: {
      resourceName: MODEL_NAME,
      resources: [id],
    },
    xhrOptions: {
      url,
      method: 'DELETE',
      headers: {
        'Authorization': `Token ${getState().auth.authToken}`,
      },
      json: true
    },
    onSucceeded: (action, res, body) => {
      dispatch(action);
      // TODO
      // history.push(`/${body.slug}/`);
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

export const productsSelector = state => state.products.resources;

export const slugKeyedProductsSelector = createSelector(
  [
    productsSelector,
    (state, props) => props.productSlug,
  ],
  (products, productSlug) => getSlugKeyedObj(products)[productSlug],
);


export const getCategoryBySlug = (state, props) => (
    Object.values(state.categories.resources).find(cat => cat.slug === props.match.params.slug)
);

export const getFoodItemsOfCategory = (state, props) => {
    const category = getCategoryBySlug(state, props);
    return category ? Object.values(state.products.resources).filter(v => v.category === category.url) : []
};

export const getCategoryProducts = createSelector(
  [
    productsSelector,
    (_, {categoryId}) => categoryId
  ],
  (products, categoryId) => Object.values(products).filter(v => v.category === categoryId)
);