import React from 'react';

import {QuantityButtons} from 'components/quantity-buttons';


export class FoodItem extends React.Component {

    render() {
        const {food} = this.props;
        return (
            <div>
                    <img src={food.photo}/>
                    <p>{food.title}</p>
                    <p>{food.description}</p>
                    <QuantityButtons foodItemId={food.id}/>
            </div>

        )
    }
}
