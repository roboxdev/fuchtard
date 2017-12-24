import React from 'react';
import {connect} from 'react-redux';
import { compose, withProps, withHandlers, defaultProps } from 'recompose';


import FoodItem from './FoodItem';
import styles from 'styles/FoodCategory.css';

import {getCategoryProducts} from 'core/reducers/products';

const CategoryContent = ({category, products, ...rest}) => (
  <div className={styles.foodItemCategory}>
    {Object.values(products).map(
      food =>
        <FoodItem
          food={food}
          key={food.url}
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