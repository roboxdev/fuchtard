import React from 'react';
import {connect} from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { withFormik } from 'formik';
import slug from 'slug';

import { Link } from 'react-router-dom';

import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';
import {actions, visibleCategoriesWithAvatarSelector} from 'core/reducers/categories';
import {isSlug} from 'core/helpers';

const CategoryForm =  ({
  onTitleChange,
  onSlugChange,
  values,
  errors,
  touched,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <form
    onSubmit={handleSubmit}
  >
    <Input
      name={'title'}
      label={'title'}
      value={values.title}
      error={touched.title && errors.title}
      onChange={onTitleChange}
      onBlur={handleBlur}
    />
    <Input
      name={'slug'}
      label={'Slug'}
      value={values.slug}
      error={touched.slug && errors.slug}
      onChange={onSlugChange}
      onBlur={handleBlur}
    />
    <Button
      type={'submit'}
      disabled={isSubmitting}
    >
      Submit
    </Button>
  </form>
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
  withFormik({
    mapPropsToValues: props => ({title: '', slug: ''}),
    validate: (values, props) => {
      const errors = {};
      if (!values.slug) {
        errors.slug = 'Required';
      } else if (
        !isSlug(values.slug)
      ) {
        errors.slug = 'Некорректный slug';
      }
      return errors;
    },
    handleSubmit: ({title, slug},
                   {
                     props: {createCategory},
                     resetForm,
                   }) => {
      createCategory({
        title,
        slug,
      });
      resetForm();
    },
  }),
  withHandlers({
    onTitleChange: ({ setFieldValue }) => v => {
      setFieldValue('title', v);
      setFieldValue('slug', slug(v));
    },
    onSlugChange: ({ setFieldValue }) => v => {
      setFieldValue('slug', v);
    },
  }),
);

export default CategoryFormHOC(CategoryForm);