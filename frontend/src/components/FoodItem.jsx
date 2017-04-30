import React from 'react';

import { Card, CardMedia, CardTitle, CardActions, CardText } from 'react-toolbox/lib/card';
import styles from 'styles/FoodItem.css';

import FoodQuantityButtons from 'components/FoodQuantityButtons';


export class FoodItem extends React.Component {
    render() {
        const {food} = this.props;
        return <div className={styles.itemWrapper}>
            <Card theme={{card: styles.card}}>
                <div>
                    <CardMedia
                        aspectRatio="wide"
                        image={food.photo}
                    />
                    <CardTitle title={food.title}/>
                    <CardText>
                        {
                            food.raw_price > food.price &&
                            <span className={styles.oldPrice}>{food.raw_price}&nbsp;₸</span>
                        }
                        <span> · </span>
                        <span>{food.price}&nbsp;₸</span>
                        <span> · </span>
                        <span>{food.amount}</span>
                    </CardText>
                    <CardTitle subtitle={food.description}/>
                    {/*<CardText>{food.description}</CardText>*/}
                </div>
                <CardActions>
                    <FoodQuantityButtons foodItemId={food.id}/>
                </CardActions>
            </Card>
        </div>
    }
}


export default FoodItem;