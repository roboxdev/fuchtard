import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';

import { actions as cartActions } from 'reducers/cart';
import { getQuantityByFoodId } from 'selectors/app';


export class FoodQuantityButtons extends React.Component {
    render() {
        const {quantity, plusButton, minusButton} = this.props;
        return (
            <div>
                {quantity >= 1 &&
                <Button className="quantity-button" raised onClick={minusButton}>
                    <span className="plusminus">−</span>
                </Button>
                }
                {quantity >= 1 &&
                <span>{quantity}</span>
                }
                <Button className="quantity-button" raised disabled={quantity >= 9} onClick={plusButton}>
                    {!quantity || quantity < 1
                        ? <FontIcon value="add_shopping_cart"/>
                        : <span className="plusminus">+</span>}
                </Button>
            </div>
        )
    }
}


export default connect(
    (state, props) => ({
        quantity: getQuantityByFoodId(state, props),
    }),
    (dispatch, props) => ({
        plusButton: () => dispatch(cartActions.plusButton(props.foodItemId)),
        minusButton: () => dispatch(cartActions.minusButton(props.foodItemId)),
    })
)(FoodQuantityButtons);