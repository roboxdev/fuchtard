import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/app';

class CartItem extends React.Component {
    render() {
        const cartItem = this.props.cartItem;
        const foodItem = cartItem.get('foodItem');
        return (
            <div>
                {foodItem.get('title')}
                <button onClick={() => this.props.plusButton(foodItem, cartItem.get('quantity'))}>+</button>
                <span>{cartItem.get('quantity')}</span>
                <button onClick={() => this.props.minusButton(foodItem, cartItem.get('quantity'))}>-</button>
                <button>PROCEED</button>
            </div>

        )
    }
}

class Cart extends React.Component {
    render() {
        const cart = this.props.cart;
        return (
            <div>
                CART:
                {cart.map(
                    (cartItem, index) => <CartItem
                        key={index}
                        cartItem={cartItem}
                        plusButton={this.props.plusButton}
                        minusButton={this.props.minusButton}
                    />
                )}
            </div>
        )
    }
}

export const ConnectedCart = connect(
    function mapStateToProps(state) {
        return {
            cart: state.get('cart'),
        }
    },
    function mapDispatchToProps(dispatch) {
        return {
            plusButton: (foodItemId, quantity) => dispatch(actions.plusButton(foodItemId, quantity)),
            minusButton: (foodItemId, quantity) => dispatch(actions.minusButton(foodItemId, quantity)),
        }
    }
)(Cart);