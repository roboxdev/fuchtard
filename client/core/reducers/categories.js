import Immutable from 'seamless-immutable';
import { createSelector } from 'reselect';

import flow from 'lodash/fp/flow';
import uniqBy from 'lodash/fp/uniqBy';
import keyBy from 'lodash/fp/keyBy';
import mapValues from 'lodash/fp/mapValues';

import endpoints from 'core/endpoints';

import { resourceReducer } from 'redux-resource';
import { crudRequest } from 'redux-resource-xhr';

import {getSlugKeyedObj} from 'core/helpers';
import history from 'browserHistory';
import {productsSelector} from 'core/reducers/products';


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

const update = (id, url, data) => (dispatch, getState) => (
  crudRequest('update', {
    dispatch,
    actionDefaults: {
      resourceName: MODEL_NAME,
      resources: [id]
    },
    xhrOptions: {
      url,
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

export const visibleCategoriesSelector = createSelector(
    categoriesSelector,
    categories => Object.values(categories).filter(v => v && v.visible)
);

export const slugKeyedCategoriesSelector = createSelector(
  [
    categoriesSelector,
    (state, props) => props.categorySlug,
  ],
  (categories, categorySlug) => getSlugKeyedObj(categories)[categorySlug],
);

const categoriesAvatarSelector = createSelector(
  productsSelector,
  (products) => flow(
    uniqBy('category'),
    keyBy('category'),
    mapValues('photo'),
  )(Object.values(products))
);

export const visibleCategoriesWithAvatarSelector = createSelector(
    visibleCategoriesSelector,
    categoriesAvatarSelector,
    (categories, products) => categories.map(
      category => ({
        ...category,
        avatar: products[category.id],
      })
    )
);

