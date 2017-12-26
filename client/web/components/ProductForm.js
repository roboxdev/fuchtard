import React from 'react';
import {connect} from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { withFormik } from 'formik';
import slug from 'slug';
import { Link } from 'react-router-dom';

import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';
import {actions} from 'core/reducers/products';
import {isSlug} from 'core/helpers';

const ProductForm =  ({
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
    <Input
      name={'category'}
      label={'category'}
      value={values.category}
      error={touched.category && errors.category}
      onChange={onSlugChange}
      onBlur={handleBlur}
    />
    <Input
      name={'description'}
      label={'description'}
      value={values.description}
      error={touched.description && errors.description}
      onChange={onSlugChange}
      onBlur={handleBlur}
    />
    <Input
      name={'photo'}
      label={'photo'}
      value={values.photo}
      error={touched.photo && errors.photo}
      onChange={onSlugChange}
      onBlur={handleBlur}
    />
    <Input
      name={'rawPrice'}
      label={'rawPrice'}
      value={values.rawPrice}
      error={touched.rawPrice && errors.rawPrice}
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
      disabled={isSubmitting}
      onClick={onDelete}
    >
      Delete
    </Button>
  </form>
);


const ProductFormHOC = compose(
  connect(
    null,
    {
      createProduct: actions.create,
      updateProduct: actions.update,
      deleteProduct: actions.destroy,
    }
  ),
  withFormik({
    mapPropsToValues: ({product: {
      title,
      slug,
      category,
      description,
      photo,
      rawPrice,
    }}) => ({
      title,
      slug,
      category,
      description,
      photo,
      rawPrice,
    }),
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
                     props: {product: {id, url}, createProduct, updateProduct},
                     resetForm,
                   }) => {
      if (id) {
        updateProduct(id, url, values);
      } else {
        createProduct(values);
        resetForm();
      }
    },
  }),
  withHandlers({
    onTitleChange: ({ setFieldValue, product: {id} }) => v => {
      setFieldValue('title', v);
      if (!id) {
        setFieldValue('slug', slug(v).toLowerCase());
      }
    },
    onSlugChange: ({ setFieldValue }) => v => {
      setFieldValue('slug', v.toLowerCase());
    },
    onDelete: ({ deleteProduct, product: {id, url} }) => () => {
      deleteProduct(id, url);
    }
  }),
);

export default ProductFormHOC(ProductForm);