import React from 'react';
import {connect} from 'react-redux';

import map from 'lodash/map';
import * as actions from 'actions/app';
import {foodItemAnnotatedCart, subtotalSelector} from 'selectors/app';

import {Card, CardTitle} from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';

import styles from '../styles/checkout.css';
import cardStyles from '../styles/cart-card.css';


@connect(
    null,
    (dispatch, props) => ({
        plusButton: () => dispatch(actions.plusButton(props.foodItemId)),
        minusButton: () => dispatch(actions.minusButton(props.foodItemId, props.quantity, props.foodItemTitle)),
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
                    <CartQuantityButtons
                        foodItemId={foodItemId}
                        quantity={quantity}
                        foodItemTitle={foodItem.title}
                    />
                    <div styleName="styles.food-title">
                        {quantity} × {foodItem.title}:
                    </div>
                    <p>{foodItem.price * quantity}₸</p>
                </Card >
                : null
        )
    }
}


@connect(
    state => ({
        cartPrice: subtotalSelector(state),
    }),
    dispatch => ({
        clearCart: () => dispatch(actions.clearCart()),
    })
)
class CartTotal extends React.Component {
    render() {
        const {cartPrice, clearCart} = this.props;
        return <Card theme={cardStyles}>
            <Button icon="remove_shopping_cart" onClick={clearCart}/>
            <div styleName="styles.food-title">
                Итого
            </div>
            <p>{cartPrice}₸</p>
        </Card >
    }
}


@connect(
    state => ({
        annotatedCart: foodItemAnnotatedCart(state),
    }),
)
export class Cart extends React.Component {
    render() {
        const {annotatedCart, cartPrice} = this.props;
        return (
            <div>
                CART:
                {map(annotatedCart, ({quantity, foodItem}, foodItemId) =>
                    <CartItem
                        key={foodItemId}
                        foodItemId={foodItemId}
                        foodItem={foodItem}
                        quantity={quantity}
                    />
                )}
                <CartTotal/>
            </div>
        )
    }
}
