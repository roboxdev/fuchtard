import React from 'react';

import { Link } from 'react-router-dom';
import { Card, CardMedia, CardTitle, CardActions, CardText } from 'react-toolbox/lib/card';
import styles from 'styles/FoodItem.css';

import FoodQuantityButtons from './FoodQuantityButtons';


const ProductCard = ({product, category}) => (
  <div className={styles.itemWrapper}>
    <div className={styles.itemWrapperInner}>
      <Card theme={{card: styles.card}}>
        <div>
          <CardMedia
            aspectRatio="wide"
            image={product.photo}
          />
          <Link to={`/${category.slug}/${product.slug}/`}>
            <CardTitle title={product.title}/>
          </Link>
          <CardText>
            {
              product.raw_price > product.price &&
              <Fragment>
                <span className={styles.oldPrice}>{product.raw_price}&nbsp;₸</span>
                <span> · </span>
              </Fragment>
            }
            <span>{product.price}&nbsp;₸</span>
            <span> · </span>
            <span>{product.amount}</span>
          </CardText>
          <CardTitle subtitle={product.description}/>
          {/*<CardText>{product.description}</CardText>*/}
        </div>
        <CardActions>
          <FoodQuantityButtons foodItemId={product.id}/>
        </CardActions>
      </Card>
    </div>
  </div>
);


export default ProductCard;