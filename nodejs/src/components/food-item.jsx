import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';

import * as actions from 'actions/app';
import {getQuantityByFoodId} from 'selectors/app';


@connect(
    (state, props) => ({
        quantity: getQuantityByFoodId(state, props),
    }),
    (dispatch, props) => ({
        plusButton: () => dispatch(actions.plusButton(props.foodItemId)),
        minusButton: () => dispatch(actions.minusButton(props.foodItemId)),
    })
)
class FoodQuantityButtons extends React.Component {
    render() {
        const {quantity, plusButton, minusButton} = this.props;
        return (
            <div>
                {quantity >= 1 &&
                <Button className="quantity-button" raised onClick={minusButton}>
                    {quantity <= 1
                        ? <FontIcon value="remove_shopping_cart"/>
                        : <span className="plusminus">−</span>}
                </Button>
                }
                {quantity >= 1 &&
                <span>{quantity}</span>
                }
                <Button className="quantity-button" raised disabled={quantity >= 9} onClick={plusButton}>
                    {quantity < 1
                        ? <FontIcon value="add_shopping_cart"/>
                        : <span className="plusminus">+</span>}
                </Button>
            </div>
        )
    }
}


export class FoodItem extends React.Component {

    render() {
        const {food} = this.props;
        return (
            <div>
                <img src={food.photo}/>
                <p>{food.title}</p>
                <p>{food.description}</p>
                <FoodQuantityButtons foodItemId={food.id}/>
            </div>

        )
    }
}
