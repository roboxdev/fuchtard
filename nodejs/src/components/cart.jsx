import React from 'react';
import {connect} from 'react-redux';

import map from 'lodash/map';
import * as actions from 'actions/app';
import {foodItemAnnotatedCart, subtotalSelector} from 'selectors/app';

import {Card, CardTitle} from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';

import {GiftsForm} from 'components/gifts';

import styles from '../styles/checkout.css';
import cardStyles from '../styles/cart-card.css';


@connect(
    null,
    (dispatch, props) => ({
        plusButton: () => dispatch(actions.plusButton(props.foodItemId)),
        minusButton: () => dispatch(actions.minusButton(props.foodItemId)),
    })
)
class CartQuantityButtons extends React.Component {
    render() {
        const {quantity, plusButton, minusButton} = this.props;
        return (
            <div>
                <Button styleName="styles.quantity-button" onClick={minusButton}>
                        <span className="plusminus">−</span>
                </Button>
                <Button styleName="styles.quantity-button" disabled={quantity >= 9} onClick={plusButton}>
                    <span className="plusminus">+</span>
                </Button>
            </div>
        )
    }
}


class CartItem extends React.Component {
    render() {
        const {foodItemId, foodItem, quantity} = this.props;
        // const {price} = foodItem;
        return (foodItem
                ? <Card theme={cardStyles}>
                    <div>
                        <div styleName="styles.quantity-container">
                            <CartQuantityButtons
                                foodItemId={foodItemId}
                                quantity={quantity}
                            />
                        </div>
                        <div styleName="styles.food-title">
                            <p>{quantity} × {foodItem.title}:</p>
                            <p>{foodItem.price * quantity}₸</p>
                        </div>
                    </div>
                </Card >
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
                    <span>TOTAL: {cartPrice}₸</span>
                </div>
                <GiftsForm/>
            </div>
        )
    }
}
