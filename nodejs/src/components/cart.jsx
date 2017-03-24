import React from 'react';
import {connect} from 'react-redux';

import map from 'lodash/map';
import * as actions from 'actions/app';
import {foodItemAnnotatedCart, subtotalSelector} from 'selectors/app';

import {GiftsForm} from 'components/gifts';

import {QuantityButtons} from 'components/quantity-buttons';

import styles from '../styles/checkout.styl';


class CartItem extends React.Component {
    render() {
        const {foodItemId, foodItem, quantity} = this.props;
        return (foodItem
                ? <div>
                    {foodItem.title}
                    <QuantityButtons
                        foodItemId={foodItemId}
                        quantity={quantity}
                    />
                </div>
                : null
        )
    }
}

@connect(
    state => ({
        annotatedCart: foodItemAnnotatedCart(state),
        cartPrice: subtotalSelector(state),
    }),
    dispatch => ({
        placeOrder: () => dispatch(actions.placeOrder()),
    })
)
export class Cart extends React.Component {
    render() {
        const {annotatedCart, cartPrice} = this.props;
        return (
            <div styleName="styles.wrapper">
                CART:
                {map(annotatedCart, ({quantity, foodItem}, foodItemId) =>
                    <CartItem
                        key={foodItemId}
                        foodItemId={foodItemId}
                        foodItem={foodItem}
                        quantity={quantity}
                    />
                )}
                <div>
                    <span>TOTAL: {cartPrice}</span>
                </div>
                <GiftsForm/>
            </div>
        )
    }
}
