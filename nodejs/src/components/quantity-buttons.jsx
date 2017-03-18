import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-toolbox/lib/button';

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
                <Button raised disabled={quantity >= 9} onClick={plusButton}>+</Button>
                <span>{quantity}</span>
                {quantity >= 1 &&
                <Button raised onClick={minusButton}>-</Button>
                }
            </div>
        )
    }
}