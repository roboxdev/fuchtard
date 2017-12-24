import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import { compose, defaultProps, withProps } from 'recompose';

import CategoryForm from 'components/CategoryForm';
import CategoryContent from 'components/CategoryContent';
import PageTitleUpdater from 'components/PageTitleUpdater';
import {slugKeyedCategoriesSelector} from 'core/reducers/categories';


const CategoryView = ({categorySlug, category, category: {title}, ...rest}) => (
  <Fragment>
    <PageTitleUpdater title={title}/>
    <CategoryForm
      category={category}
      categorySlug={categorySlug}
    />
    <CategoryContent
      category={category}
      categorySlug={categorySlug}
      {...rest}
    />
  </Fragment>
);

const CategoryViewHOC = compose(
  withProps(({match: {params: {categorySlug}}}) => ({
    categorySlug,
  })),
  connect((state, props) => ({
    category: slugKeyedCategoriesSelector(state, props),
  })),
  defaultProps({
    category: {},
  }),
  withProps(({category: {id}}) => ({
    categoryId: id,
  })),
);

export default CategoryViewHOC(CategoryView);
