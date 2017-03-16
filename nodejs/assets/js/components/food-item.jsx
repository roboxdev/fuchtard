import React from 'react';
import {connect} from 'react-redux';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {QuantityButtons} from 'components/quantity-buttons';


export class FoodItem extends React.Component {

    render() {
        const {food} = this.props;
        return (
            <Card>
                <CardMedia
                    overlay={<CardTitle title={food.title} subtitle={food.description}/>}
                >
                    <img src={food.photo}/>
                </CardMedia>
                <CardActions>
                    <QuantityButtons foodItemId={food.id}/>
                </CardActions>
                {food.title}
            </Card>

        )
    }
}
