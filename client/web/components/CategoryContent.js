import React from 'react';
import {connect} from 'react-redux';
import { compose, withProps, withHandlers, defaultProps } from 'recompose';

import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardTitle } from 'react-toolbox/lib/card';
import styled from 'styled-components';

import styles from 'styles/FoodItem.css';

import {getCategoryProducts} from 'core/reducers/products';

const CategoryContentStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2px -4px;
`;

const CategoryContent = ({category, products, ...rest}) => (
  <CategoryContentStyled>
    <div className={styles.itemWrapper}>
        <div className={styles.itemWrapperInner}>
          <Card theme={{card: styles.card}}>
            <div>
              <CardMedia
                aspectRatio="wide"
                // image={product.photo}
              />
              <Link to={`/${category.slug}/new/`}>
                <CardTitle title={'Новый продукт'}/>
              </Link>
              <CardTitle subtitle={'Создать'}/>
            </div>
          </Card>
        </div>
      </div>
    {Object.values(products).map(
      product =>
        <ProductCard
          product={product}
          key={product.url}
          category={category}
          {...rest}
        />
    )}
  </CategoryContentStyled>
);


const CategoryContentHOC = compose(
  connect(
    (state, props) => ({
      products: getCategoryProducts(state, props),
    })
  ),
);

export default CategoryContentHOC(CategoryContent);