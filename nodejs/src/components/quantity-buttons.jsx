import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';

import * as actions from 'actions/app';
import {getQuantityByFoodId} from 'selectors/app'

@connect(
    (state, props) => ({
        quantity: props.quantity || getQuantityByFoodId(state, props),
    }),
    (dispatch, props) => ({
        plusButton: () => dispatch(actions.plusButton(props.foodItemId)),
        minusButton: () => dispatch(actions.minusButton(props.foodItemId)),
    })
)
export class QuantityButtons extends React.Component {
    render() {
        const {quantity, plusButton, minusButton} = this.props;
        return (
            <div>
                {quantity >= 1 &&
                <Button raised onClick={minusButton}>
                    {quantity <= 1
                        ? <FontIcon value="remove_shopping_cart"/>
                        : <span>−</span>}
                </Button>
                }
                {quantity >= 1 &&
                <span>{quantity}</span>
                }
                <Button raised disabled={quantity >= 9} onClick={plusButton}>
                    {quantity < 1
                        ? <FontIcon value="add_shopping_cart"/>
                        : <span>+</span>}
                </Button>
            </div>
        )
    }
}