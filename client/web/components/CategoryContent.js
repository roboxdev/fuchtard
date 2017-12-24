import React from 'react';
import {connect} from 'react-redux';
import { compose, withProps, withHandlers, defaultProps } from 'recompose';


import ProductCard from './ProductCard';
import styles from 'styles/FoodCategory.css';

import {getCategoryProducts} from 'core/reducers/products';

const CategoryContent = ({category, products, ...rest}) => (
  <div className={styles.foodItemCategory}>
    {Object.values(products).map(
      product =>
        <ProductCard
          product={product}
          key={product.url}
          category={category}
          {...rest}
        />
    )}
  </div>
);


const CategoryContentHOC = compose(
  connect(
    (state, props) => ({
      products: getCategoryProducts(state, props),
    })
  ),
);

export default CategoryContentHOC(CategoryContent);