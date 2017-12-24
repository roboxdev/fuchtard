import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import { compose, defaultProps } from 'recompose';

import {getFoodItemsOfCategory, getCategoryBySlug} from 'core/reducers/products';
import FoodItem from './FoodItem';
import { PageTitleUpdater } from './PageTitle';

import styles from 'styles/FoodCategory.css';
import CategoryForm from 'components/CategoryForm';


const FoodCategory = ({category, foodItems, category: {title}, ...rest}) => (
  <div className={styles.foodItemCategory}>
    <PageTitleUpdater title={title}/>
    {foodItems.map(
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

const Category = (props) => (
  <Fragment>
    <CategoryForm />
    <FoodCategory {...props} />
  </Fragment>
);

const CategoryHOC = compose(
  connect(
    (state, props) => ({
        category: getCategoryBySlug(state, props),
        foodItems: getFoodItemsOfCategory(state, props),
    })
  ),
  defaultProps({
    category: {
      title: '',
    }
  })
);

export default CategoryHOC(Category);
