import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button} from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';

import * as actions from 'actions/app';
import {getCategoryBySlug, getQuantityByFoodId, getFoodItemsBySlugOrID} from 'selectors/app';


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
        const {food, categoryURL} = this.props;
        return (food
            ? <div>
                <img src={food.photo}/>
                <p>
                    <Link to={`${categoryURL}${food.slug || food.id}/`}>
                        {food.title}
                    </Link>
                </p>
                <p>{food.description}</p>
                <FoodQuantityButtons foodItemId={food.id}/>
            </div>
            : null
        )
    }
}

@connect(
    (state, props) => ({
        food: getFoodItemsBySlugOrID(state, props),
        category: getCategoryBySlug(state, props),
    })
)
export class FoodItemDetails extends React.Component {
    render() {
        const {food, category} = this.props;
        return <div>
            <Link to={`/${category.slug}/`}>← {category.title}</Link>
            <FoodItem food={food}/>
        </div>
    }
}