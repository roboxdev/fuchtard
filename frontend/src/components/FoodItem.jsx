import React from 'react';

import { Link } from 'react-router-dom';
import { Card, CardMedia, CardTitle } from 'react-toolbox/lib/card';
import styles from 'styles/FoodItem.css';
import cardStyles from 'styles/food-item-card.css';

import FoodQuantityButtons from 'components/FoodQuantityButtons';


export class FoodItem extends React.Component {
    render() {
        const {food, category} = this.props;
        return (food
                ? <div className={styles.itemWrapper}>
                    <Card theme={cardStyles}>
                        <div>
                            <CardMedia
                                aspectRatio="wide"
                                image={food.photo}
                            />
                            <CardTitle
                                title={
                                    <Link to={`/${category.slug}/${food.slug || food.id}/`}>
                                        {food.title}
                                    </Link>
                                }
                                subtitle={food.description}
                            />
                        </div>
                        <div className={styles.pricing}>
                            <div>
                                {food.raw_price > food.price && <p className={styles.oldPrice}>{food.raw_price}₸</p>}
                                <p>{food.price}₸</p>
                            </div>
                            <div>
                                <FoodQuantityButtons foodItemId={food.id}/>
                            </div>
                        </div>
                    </Card>
                </div>
                : null
        )
    }
}


export default FoodItem;