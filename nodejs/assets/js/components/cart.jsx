import React from 'react';
import {connect} from 'react-redux';

import map from 'lodash/map';
import * as actions from 'actions/app';
import {foodItemAnnotatedCart, subtotalSelector} from 'selectors/app';

import {QuantityButtons} from 'components/quantity-buttons';


class CartItem extends React.Component {
    render() {
        const {foodItemId, quantity} = this.props;
        return (
            <div>
                {/*{foodItem.title}*/}
                <QuantityButtons
                    foodItemId={foodItemId}
                    quantity={quantity}
                />

            </div>

        )
    }
}

@connect(
    state => ({
        cart: state.cart,
        annotatedCart: foodItemAnnotatedCart(state),
        cartPrice: subtotalSelector(state),
    }),
    dispatch => ({
        placeOrder: () => dispatch(actions.placeOrder()),
    })
)
export class Cart extends React.Component {
    render() {
        const {cart} = this.props;
        return (
            <div>
                CART:
                {map(cart, (quantity, foodItemId) =>
                    <CartItem
                        key={foodItemId}
                        foodItemId={foodItemId}
                        quantity={quantity}
                    />
                )}
                <div>
                    <span>TOTAL: {this.props.cartPrice}</span>
                    <button onClick={this.props.placeOrder}>PROCEED</button>
                </div>
            </div>
        )
    }
}
