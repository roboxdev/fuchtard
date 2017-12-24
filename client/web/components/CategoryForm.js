import React from 'react';
import {connect} from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';
import slug from 'slug';

import { Link } from 'react-router-dom';

import Input from 'react-toolbox/lib/input';
import {actions, visibleCategoriesWithAvatarSelector} from 'core/reducers/categories';

const CategoryForm = ({
  createCategory,
  title,
  onTitleChange,
  slug,
  onSlugChange,
}) => (
  <div>
    <Input value={title} onChange={onTitleChange}/>
    <Input value={slug} onChange={v => onSlugChange(v)}/>
    <button onClick={createCategory}>add</button>
  </div>
);

const CategoryFormHOC = compose(
  connect(
    state => ({
      categories: visibleCategoriesWithAvatarSelector(state),
    }),
    {
      createCategory: actions.create,
      deleteCategory: actions.destroy,
    }
  ),
  withState('title', 'onTitleChange', ''),
  withState('slug', 'onSlugChange', ''),
  withHandlers({
    onTitleChange: ({ onTitleChange, onSlugChange }) => v => {
      onTitleChange(v);
      onSlugChange(slug(v));
    },
    createCategory: ({ createCategory, title, slug, onTitleChange, onSlugChange }) => () => {
      createCategory({
        title,
        slug,
      });
      onTitleChange('');
      onSlugChange('');
    },
  })
);

export default CategoryFormHOC(CategoryForm);