import React from 'react';
import { connect } from 'react-redux';
import { compose, defaultProps, withProps } from 'recompose';

import { Link } from 'react-router-dom';

import {slugKeyedCategoriesSelector} from 'core/reducers/categories';
import {slugKeyedProductsSelector} from 'core/reducers/products';

import ProductCard from './ProductCard';


const ProductView = ({product, category}) => (
  <div>
    <Link to={`/${category.slug}/`}>← {category.title}</Link>
    <ProductCard product={product} category={category}/>
  </div>
);

const ProductViewHOC = compose(
  withProps(({
               match: {params: {categorySlug, productSlug}}
  }) => ({
    categorySlug,
    productSlug,
  })),
  connect(
    (state, props) => ({
      product: slugKeyedProductsSelector(state, props),
      category: slugKeyedCategoriesSelector(state, props),
    }),
  ),
  defaultProps({
    product: {},
  }),
);


export default ProductViewHOC(ProductView)