import React from 'react';
import {connect} from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { withFormik } from 'formik';
import slug from 'slug';
import { Link } from 'react-router-dom';

import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';
import {actions} from 'core/reducers/categories';
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
  onDelete,
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
    <Button
      // type={'submit'}
      disabled={isSubmitting}
      onClick={onDelete}
    >
      Delete
    </Button>
  </form>
);


const CategoryFormHOC = compose(
  connect(
    null,
    {
      createCategory: actions.create,
      updateCategory: actions.update,
      deleteCategory: actions.destroy,
    }
  ),
  withFormik({
    mapPropsToValues: ({category: {title, slug}}) => ({title, slug}),
    enableReinitialize: true,
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
    handleSubmit: (values,
                   {
                     props: {category: {id}, createCategory, updateCategory},
                     resetForm,
                   }) => {
      if (id) {
        updateCategory(id, values);
      } else {
        createCategory(values);
        resetForm();
      }
    },
  }),
  withHandlers({
    onTitleChange: ({ setFieldValue, category: {id} }) => v => {
      setFieldValue('title', v);
      if (!id) {
        setFieldValue('slug', slug(v).toLowerCase());
      }
    },
    onSlugChange: ({ setFieldValue }) => v => {
      setFieldValue('slug', v.toLowerCase());
    },
    onDelete: ({ deleteCategory, category: {id} }) => () => {
      deleteCategory(id);
    }
  }),
);

export default CategoryFormHOC(CategoryForm);