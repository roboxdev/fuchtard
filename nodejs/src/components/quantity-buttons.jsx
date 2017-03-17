import React from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

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
                <RaisedButton label="+" onClick={plusButton}/>
                <span>{quantity}</span>
                {quantity >= 1 &&
                <RaisedButton label="-" onClick={minusButton}/>
                }
            </div>
        )
    }
}